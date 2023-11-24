import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from '@mui/material';
import { Customer, CustomerListProps } from '../../../types/types.ts';
import { useData } from '../../../contexts/data.context.tsx';
import { sxStyles } from './CustomerList.styles.ts';

export const CustomerList: React.FC<CustomerListProps> = ({
    handleSwitchTabs,
}) => {
    const { customers, fetchCustomerOrders, error, isLoading } = useData();

    const handleShowOrdersClick = (customerId: number): void => {
        fetchCustomerOrders(customerId);
        handleSwitchTabs('orders');
    };

    if (isLoading) {
        return <div>Loading orders...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <TableContainer sx={sxStyles.container}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Postal Code</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Orders</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((customer: Customer) => (
                        <TableRow key={customer.id}>
                            <TableCell>{customer.id}</TableCell>
                            <TableCell>
                                {customer.title.toUpperCase()}
                            </TableCell>
                            <TableCell>{customer.lastname}</TableCell>
                            <TableCell>{customer.firstname}</TableCell>
                            <TableCell>{customer.postal_code}</TableCell>
                            <TableCell>{customer.city}</TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>
                                {
                                    <Button
                                        value={customer.id}
                                        onClick={() =>
                                            handleShowOrdersClick(customer.id)
                                        }
                                    >
                                        SHOW ORDERS
                                    </Button>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
