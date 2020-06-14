import React from "react";

import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

function Pricing() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <div>
        {/* Create a pricing page */}
      </div>
    </Layout>
  );
}

export default Pricing;
