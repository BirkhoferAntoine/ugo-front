import React, { useEffect, useRef, useState } from 'react';
import { Paper, Button, Typography, Container } from '@mui/material';
import { CustomerList } from '../CustomerList/CustomerList.tsx';
import { CustomerOrders } from '../CustomerOrders/CustomerOrders.tsx';
import {
    alternatingAnimation,
    moveLeft,
    startAnimation,
} from '../../../services/animations.service.tsx';
import { sxStyles } from './Homepage.styles.ts';

export const Homepage: React.FC = () => {
    const [showComponent, setShowComponent] = useState<
        'list' | 'orders' | null
    >(null);
    const [title, setTitle] = useState<
        'Customers List' | "Customer's orders" | 'Welcome' | null
    >('Welcome');

    const listButtonRef = useRef<HTMLButtonElement>(null);
    const titleRef = useRef<HTMLElement>(null);
    const paperRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLElement>(null);
    const handleSwitchTabs = (component: 'list' | 'orders' | null): void => {
        setShowComponent(component);
    };

    const handleStart = async () => {
        startAnimation(
            titleRef.current,
            listButtonRef.current,
            paperRef.current
        ).then(() => {
            setShowComponent('list');
            setTitle('Customers List');
        });
    };

    useEffect(() => {
        switch (showComponent) {
            case 'orders':
                setTitle("Customer's orders");
                moveLeft(titleRef.current);
                alternatingAnimation(paperRef.current);
                break;
            case 'list':
                setTitle('Customers List');
                moveLeft(titleRef.current);
                alternatingAnimation(paperRef.current);
                break;
        }
    }, [showComponent]);

    return (
        <Container sx={sxStyles.container}>
            <Paper ref={paperRef} elevation={2} sx={sxStyles.paper}>
                <Typography ref={titleRef} variant={'h2'} sx={sxStyles.title}>
                    {title}
                </Typography>
                <Button ref={listButtonRef} onClick={handleStart}>
                    Start
                </Button>

                {showComponent && (
                    <Paper
                        ref={contentRef}
                        elevation={4}
                        sx={sxStyles.tableContainer}
                    >
                        {showComponent === 'list' && (
                            <CustomerList handleSwitchTabs={handleSwitchTabs} />
                        )}
                        {showComponent === 'orders' && (
                            <CustomerOrders
                                handleSwitchTabs={handleSwitchTabs}
                            />
                        )}
                    </Paper>
                )}
            </Paper>
        </Container>
    );
};
