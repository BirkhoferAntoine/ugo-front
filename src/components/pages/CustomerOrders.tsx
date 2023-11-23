import React from 'react';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { useData } from '../../contexts/data.context.tsx';
import { CustomerOrdersProps } from '../../types/types.ts';

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
        <div>
            <Button onClick={() => handleSwitchTabs('list')}>
                Back to Customers
            </Button>
            <Paper>
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
                        {orders.map((order, index) => (
                            <TableRow key={'order-table-row-' + index}>
                                <TableCell>{order.lastname}</TableCell>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.product_id}</TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell>{order.price}</TableCell>
                                <TableCell>{order.currency}</TableCell>
                                <TableCell>{order.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div>Total Amount: {totalAmount}</div>
            </Paper>
        </div>
    );
};
