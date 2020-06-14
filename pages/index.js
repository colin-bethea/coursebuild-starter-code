import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <div>
        {/* Create a landing page */}
      </div>
    </Layout>
  );
}

export default Home;
