import React from 'react';

import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Box component="span" m={1}>
          <Link href="/">
            <a href="/" className="logo">
              <img src="/hackathon-logo.png" alt="logo" />
              <Typography variant="h6">{title}</Typography>
              <style>
                {`
                .logo {
                  display: flex;
                  align-items: center;
                  text-decoration: none;
                  color: white;
                }

                .logo-text {

                }

                .logo img {
                  max-height: 50px;
                  width: auto;
                  margin-right: 15px;
                }

                .logo
              `}
              </style>
            </a>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
