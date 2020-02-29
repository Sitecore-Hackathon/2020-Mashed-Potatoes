import React from 'react';
import { NextPage } from 'next';

const Root: NextPage<{ data: any }> = ({ data }) => {
  if (!data) {
    return <h1>404</h1>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

Root.getInitialProps = async () => {
  const data = {};
  return { data };
};

export default Root;
