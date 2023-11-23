import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ContextType, Customer, Order } from '../types/types.ts';

const DataContext = createContext<ContextType | undefined>(undefined);
export const DataProvider: React.FC = ({ children }) => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchCustomers = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<Customer[]>('/api/customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers', error);
            setError('Failed to fetch customers');
        } finally {
            setIsLoading(false);
        }
    };

    const fetchCustomerOrders = async (customerId: number) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get<Order[]>(
                `/api/customers/${customerId}/orders`
            );
            console.log('=>(data.context.tsx:34) response.data', response.data);
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders', error);
            setError('Failed to fetch orders');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <DataContext.Provider
            value={{
                customers,
                orders,
                fetchCustomers,
                fetchCustomerOrders,
                error,
                isLoading,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
