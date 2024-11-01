import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ['ABOUT US', 'SERVICES'];
const pages2 = ["LET'S START YOUR PROJECT", 'CONTACT US'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: 'transparent' }}>
            <Container maxWidth="xxxl" >
                <Toolbar disableGutters>

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: 'transparent',
                            color: "#fff",
                            padding: "0.5rem 1.5rem",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            textTransform: "none",
                            borderRadius: "8px",
                        }}
                    >
                        <img
                            src={"club_logo.png"}
                            alt="Logo"
                            style={{ width: "100px", height: "60px", marginRight: "0.5rem" }}
                        />

                    </Button>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: 50,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        E-Cell
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{

                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key='aboutus' onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"> ABOUT US </Typography>
                            </MenuItem>

                            <MenuItem key='servies' onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">EVENTS </Typography>
                            </MenuItem>

                            <MenuItem key='startproject' onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">JOIN US</Typography>
                            </MenuItem>

                            <MenuItem key='CONTACTUS' onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">CONTACT US</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, justifyContent: 'right', py: 1, mr: 3, display: { xs: 'none', md: 'flex' } }}>



                        <Button
                            key='aboutus'
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                mx: 2,
                                color: 'white',
                                display: 'block',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}
                        >
                            ABOUT US
                        </Button>


                        <Button
                            key='servies'
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                mx: 2,
                                color: 'white',
                                display: 'block',
                                fontWeight: 'bold',
                                fontSize: '20px'
                            }}
                        >
                            EVENTS
                        </Button>





                        <Button
                            key='CONTACTUS'
                            onClick={handleCloseNavMenu}
                            sx={{
                                mx: 2,
                                backgroundColor: "#8a2be2", // Base purple color
                                color: "#fff",
                                padding: "0.5rem 1.5rem",

                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "20px",
                                boxShadow: `
          0px 0px 8px rgba(138, 43, 226, 0.4),
          0px 0px 16px rgba(138, 43, 226, 0.3),
          0px 0px 24px rgba(138, 43, 226, 0.2)
        `,
                                transition: "box-shadow 0.3s ease-in-out, transform 0.2s",
                                "&:hover": {
                                    boxShadow: `
            0px 0px 10px rgba(138, 43, 226, 0.6),
            0px 0px 20px rgba(138, 43, 226, 0.5),
            0px 0px 30px rgba(138, 43, 226, 0.4)
          `,
                                    transform: "scale(1.05)", // Slightly enlarge on hover
                                },
                                "&:active": {
                                    boxShadow: `
            0px 0px 5px rgba(138, 43, 226, 0.8),
            0px 0px 10px rgba(138, 43, 226, 0.6),
            0px 0px 15px rgba(138, 43, 226, 0.5)
          `,
                                    transform: "scale(0.98)", // Slightly shrink on click
                                },
                                fontSize: '20px'
                            }}
                        >
                            JOIN US
                        </Button>




                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontWeight: 'bold',
                                    fontSize: '20px'
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                        {pages2.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    px: 2,
                                    color: 'white',
                                    m: 1,
                                    border: '4px solid white',
                                    py: 0.7, display: 'block',
                                    fontWeight: 'bold',
                                    fontSize: '20px'
                                }}


                            >
                                {page}
                            </Button>
                        ))} */}
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
