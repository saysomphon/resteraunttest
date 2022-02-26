import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Box,Toolbar,Typography,AppBar,Button,IconButton,Divider} from "@mui/material";
import { NextPage } from 'next';
import Link from 'next/link'

const TopAppBar: NextPage = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default" sx={{boxShadow:'none',background:'white'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2,display:'none' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Food Ordering Web Application
                    </Typography>
                    <Button color="inherit"><Link href="/order">Order</Link></Button>
                    <Button color="inherit"><Link href="/login">Login</Link></Button>
                </Toolbar>
            </AppBar>
            <Divider/>
        </Box>
    );
}
export default TopAppBar;
