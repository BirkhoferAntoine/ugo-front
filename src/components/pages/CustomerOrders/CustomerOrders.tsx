import React from 'react';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useData } from '../../../contexts/data.context.tsx';
import { Order, CustomerOrdersProps } from '../../../types/types.ts';
import { sxStyles } from './CustomerOrders.styles.ts';

export const CustomerOrders: React.FC<CustomerOrdersProps> = ({
    handleSwitchTabs,
}) => {
    const { orders, error, isLoading } = useData();

    const totalAmount = orders.reduce(
        (acc, order) => acc + order.price * order.quantity,
        0
    );

    if (isLoading) {
        return <div>Loading orders...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Box sx={sxStyles.container}>
            <Button onClick={() => handleSwitchTabs('list')}>
                Back to Customers
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Purchase Identifier</TableCell>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Currency</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order: Order, index) => (
                        <TableRow key={'order-table-row-' + index}>
                            <TableCell>{order.customerLastname}</TableCell>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.product_id}</TableCell>
                            <TableCell>{order.quantity}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell>{order.currency}</TableCell>
                            <TableCell>
                                {new Date(order.date).toDateString()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box sx={sxStyles.total}>
                <Typography>Total Amount: {totalAmount}</Typography>
            </Box>
        </Box>
    );
};
