import { SxProps, Theme } from '@mui/material/styles';

export type SxStylesObject = {
    [key: string]: SxProps<Theme>; // This allows any string as a key, and the value must be a valid MUI sx prop type
};

export type Customer = {
    id: number;
    title: string;
    lastname: string;
    firstname: string;
    postal_code: number;
    city: string;
    email: string;
};

export type Order = {
    customerLastname: string;
    id: number;
    product_id: number;
    quantity: number;
    price: number;
    currency: string;
    date: string;
};

export type ContextType = {
    customers: Customer[];
    orders: Order[];
    fetchCustomers: () => void;
    fetchCustomerOrders: (customerId: number) => void;
    error: string | null;
    isLoading: boolean;
};

export type CustomerListProps = {
    handleSwitchTabs: (component: 'list' | 'orders' | null) => void;
    //ref: React.RefObject<HTMLElement>;
};

export type CustomerOrdersProps = {
    handleSwitchTabs: (component: 'list' | 'orders' | null) => void;
    //ref: React.RefObject<HTMLElement>;
};
