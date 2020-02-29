import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Helmet = dynamic(() => import('../components/Helmet'));
const Header = dynamic(() => import('../components/Header'));

const Root: NextPage<{ data: any }> = ({ data }) => {
  if (!data) {
    return <h1>404</h1>;
  }

  const title = 'Sitecore: Event HUB';

  return (
    <>
      <Helmet title={title} />
      <Header title={title} />
      <Placeholder tag="main" name="main" rendering={{} as any} />
      <footer />
    </>
  );
};

Root.getInitialProps = async () => {
  const data = {};
  return { data };
};

export default Root;