const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.BOILERPLATE_DB_USER,
  host: process.env.BOILERPLATE_DB_HOST,
  database: process.env.BOILERPLATE_DB_DATABASE,
  password: process.env.BOILERPLATE_DB_PASSWORD,
  port: process.env.BOILERPLATE_DB_PORT,
  max: 1,
  min: 0,
  idleTimeoutMillis: 120000,
  connectionTimeoutMillis: 10000
});

exports.query = async (query, values) => {
  const client = await pool.connect();

  try {
    const res = await client.query(query, values);
    client.release(true);
    return res;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
