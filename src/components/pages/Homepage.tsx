import React, { useRef, useState } from 'react';
import { Box, Paper, Button } from '@mui/material';
import { CustomerList } from './CustomerList';
import { CustomerOrders } from './CustomerOrders';
import {
    //buttonClickResetAnimation,
    buttonClickSwitchAnimation,
} from '../../services/animations.service.tsx';

export const Homepage: React.FC = () => {
    const [showComponent, setShowComponent] = useState<
        'list' | 'orders' | null
    >(null);

    const listButtonRef = useRef<HTMLButtonElement>(null);
    const ordersButtonRef = useRef<HTMLButtonElement>(null);
    const handleSwitchTabs = (component: 'list' | 'orders' | null): void => {
        console.log('=>(Homepage.tsx:19) component', component);
        switch (component) {
            /*case showComponent:
                buttonClickResetAnimation([
                    listButtonRef.current,
                    ordersButtonRef.current,
                ]);
                component = null;
                break;*/
            case 'orders':
                buttonClickSwitchAnimation(
                    ordersButtonRef.current,
                    listButtonRef.current
                );
                break;
            case 'list':
            default:
                buttonClickSwitchAnimation(
                    listButtonRef.current,
                    ordersButtonRef.current
                );
                break;
        }
        setShowComponent(component);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    position: 'relative',
                    boxShadow:
                        '20px 20px 60px #bebebe,\n' +
                        ' -20px -20px 60px #ffffff;',
                    borderRadius: '50px',
                    background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
                }}
            >
                <Button
                    ref={listButtonRef}
                    value="list"
                    onClick={() => handleSwitchTabs('list')}
                >
                    Customer List
                </Button>
                <Button ref={ordersButtonRef}>Customer Orders</Button>

                {showComponent === 'list' && (
                    <CustomerList handleSwitchTabs={handleSwitchTabs} />
                )}
                {showComponent === 'orders' && (
                    <CustomerOrders handleSwitchTabs={handleSwitchTabs} />
                )}
            </Paper>
        </Box>
    );
};
