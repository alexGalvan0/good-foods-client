import * as React from 'react';
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function SimpleBottomNavigation() {

    const [user, setUser] = useState('')
    useEffect(() => { setUser(localStorage.getItem('token')) })

    const [value, setValue] = React.useState(0);
    const router = useRouter();
    const goToProfile = (e) => {
        e.preventDefault();
        router.push('/profile');
    }
    const goToSearchMovie = (e) => {
        e.preventDefault();
        router.push('/movie/search');
    }
    const goHome = (e) => {
        e.preventDefault();
        router.push('/');
    }
    let logout = () => {
        localStorage.clear('token')
    }
    let login = (e) => {
        e.preventDefault();
        router.push('/login');
    }

    return (



        <Box style={{ position: 'fixed', bottom: '0', width: '100vw', }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={goHome} label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction onClick={goToSearchMovie} label="search" icon={<SearchIcon />} />
                {user ? <BottomNavigationAction onClick={goToProfile} label="Profile" icon={<AccountBoxIcon />} /> :null}
                {user ? <BottomNavigationAction onClick={(logout,login)} label="Logout" icon={<LogoutIcon />} /> :
                    <BottomNavigationAction onClick={login} label="Login" icon={<LoginIcon />} />}

            </BottomNavigation>
        </Box>

    );
}