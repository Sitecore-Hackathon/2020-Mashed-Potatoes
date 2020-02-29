import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

import fetch from 'isomorphic-unfetch';
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
      <Header title="Events HUB" />
      <Placeholder name="content" rendering={route} />
      <footer />
    </>
  );
};

Root.getInitialProps = async ({ asPath }) => {
  const { sitecoreInstanceUrl } = globalThis as any;
  const { sitecoreApiKey } = globalThis as any;
  const { sitecoreDefaultLang } = globalThis as any;

  const url = `${sitecoreInstanceUrl}/sitecore/api/layout/render/jss?item=${
    asPath.replace('/', '%2F') // TODO: DON' HAVE TIME TO HANDLE THIS :)
  }&sc_apikey=${encodeURIComponent(sitecoreApiKey)}&sc_lang=${encodeURIComponent(sitecoreDefaultLang)}`;
  console.log(url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Request to sitecore failed');
  }
  const json = await response.json();
  // /sitecore/api/layout/render/jss?item=/&sc_apikey={66B881FA-E36E-4587-8117-194F8C3F7815}&sc_lang=en
  // const data = { ...mockdata };

  return json as any;
};

export default Root;
