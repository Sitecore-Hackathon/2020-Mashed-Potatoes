import React from 'react';

import { Helmet } from 'react-helmet';

interface HelmetComponentProps {
  title: string;
}

const HelmetComponent = ({ title }: HelmetComponentProps) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </Helmet>
);

export default HelmetComponent;
