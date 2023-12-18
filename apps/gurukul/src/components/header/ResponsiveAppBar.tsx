'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import {
  styled,
  useTheme
} from '@mui/material/styles';
import { Collapse, Divider, Drawer } from '@mui/material';
import ContactBar from './ContactBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Routes } from '@/data/routes';
import { basicInfo } from '@/data/basicInfo';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const pages = ['Home', 'Products', 'About', 'Team', 'Services', 'Pricing', 'Blog'];

function ResponsiveAppBar({ window }: { window?: () => Window }) {

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });


  const [anchor, setAnchor] = React.useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(true);
  };

  const handleCloseNavMenu = () => {
    setAnchor(false);
  };

  const theme = useTheme();

  return (
    <AppBar sx={{ background: theme.palette.background.default }}>

      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Collapse in={!trigger} timeout={1000}>
          <div><ContactBar /></div>
        </Collapse>
      </Box>
      <Container maxWidth="lg">

        <Toolbar disableGutters sx={{ height: 108 }}>

          {/* Open menu Logo Starts */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}

          >
            {basicInfo.name}
          </Typography>
          {/* Open menu Logo Ends */}

          {/* Open menu item starts */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }} justifyContent="flex-end">
            {Routes.map((route, index) => (

              <Button
                key={index}
                href={route.route}
                sx={{
                  my: 2, mx: 1, display: 'block', color: theme.palette.primary.contrastText,
                  ':hover': {
                    bgcolor: 'secondary.main', // theme.palette.primary.main
                    color: 'secondary.contrastText',
                  },
                }}
              >
                {route.name}
              </Button>
            ))}
          </Box>
          {/* Open menu item ends */}

          {/* Collapsed menu items starts */}
          <Box sx={{ flexGrow: 1, display: { md: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="Navigation bar"
              aria-controls="navigation-bar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              open={anchor}
              onClose={handleCloseNavMenu}

            >
              <DrawerHeader>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleCloseNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </DrawerHeader>
              <Divider />
              <Box sx={{ width: 300 }}>
                {Routes.map((route, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu} sx={{ padding: theme.spacing(2, 4), }}>
                    <Link href={route.route} sx={{ color: 'inherit', textDecoration: 'none' }}>{route.name}</Link>
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
          {/* Collapsed menu items ends */}
          {/* Collapsed menu logo starts */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: 'flex', lg: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {basicInfo.name}
          </Typography>
          {/* Collapsed menu logo ends */}

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;