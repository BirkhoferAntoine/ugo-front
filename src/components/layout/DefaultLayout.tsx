import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material';
import { Navigation } from './Navigation.tsx';
import { Footer } from './Footer.tsx';

const Offset = styled('div')({ minHeight: 'var(--header-height)' });
export const DefaultLayout: React.FC = () => {
    return (
        <>
            <Navigation />
            <Offset />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
