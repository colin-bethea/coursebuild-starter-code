import React, { useEffect } from "react";
import Router from 'next/router'

import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

const Account = () => {
  const { user, loading } = useFetchUser();

  useEffect(() => {
    if (!user && !loading){
        Router.push('/api/auth/login')
    }
  });

  return (
    <Layout user={user} loading={loading}>
      <div>
        {/* Create account page */}
      </div>
    </Layout>
  );
};

export default Account;
