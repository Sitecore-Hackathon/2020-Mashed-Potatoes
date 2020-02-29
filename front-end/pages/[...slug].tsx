import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

import mockdata from './mockdata/index.json';
import { LayoutServiceData } from '../sitecore/models';

const Helmet = dynamic(() => import('../components/Helmet'));
const Header = dynamic(() => import('../components/Header'));

const Root: NextPage<LayoutServiceData> = ({ sitecore }) => {
  if (!sitecore) {
    return <h1>404</h1>;
  }

  const { route } = sitecore;

  const title = route.name;

  return (
    <>
      <Helmet title={title} />
      <Header title={title} />
      <Placeholder name="content" rendering={route} />
      <footer />
    </>
  );
};

Root.getInitialProps = async () => {
  const data = { ...mockdata };

  return data as any;
};

export default Root;
