import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

export const Navigation: React.FC = () => {
    const sxStyles = {
        header: {
            display: 'none',
        },
        toolbar: {
            display: 'none',
        },
    };

    return (
        <AppBar className={'header'} position={'fixed'} sx={sxStyles.header}>
            <Toolbar sx={sxStyles.toolbar}></Toolbar>
        </AppBar>
    );
};
