import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const FooterDesign = ({ position }) => {
  return (
    <AppBar position={position} color={'inherit'} sx={{ boxShadow: '0px 0px 0px #e3e3e3', top: 'auto', bottom: 0, alignItems: 'center' }}>
      <Toolbar sx={{ minHeight: '56px!important' }}>
        <Typography component={'p'} fontFamily={'Montserrat'} fontSize={'11px'} fontWeight={'200'} color={'#32292F'}>
          2024 (c) Daria Schumm
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default function Footer () {
  const { pathname } = useLocation();
  return (
    pathname !== '/' && pathname !== '/collections' && pathname !== '/blog' ?
    <FooterDesign position={'fixed'}/> :
    pathname === '/collections' ? <FooterDesign position={''}/> :
    null
  )
}
