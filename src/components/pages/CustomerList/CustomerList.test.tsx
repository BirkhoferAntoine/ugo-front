import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, waitFor, screen } from '@testing-library/react';
import { CustomerList } from './CustomerList';
import { Customer } from '../../../types/types';
import { DataProvider, useData } from '../../../contexts/data.context';

const mockCustomers: Customer[] = [
    {
        id: 1,
        title: 'm',
        lastname: 'Norris',
        firstname: 'Chuck',
        city: 'Frejus',
        postal_code: 83600,
        email: 'chuck@norris.com',
    },
    {
        id: 2,
        title: 'mme',
        lastname: 'Galante',
        firstname: 'Marie',
        city: '',
        postal_code: 0,
        email: 'marie-galante@france.fr',
    },
    {
        id: 3,
        title: 'm',
        lastname: 'Barbier',
        firstname: 'Christophe',
        city: 'Paris',
        postal_code: 75009,
        email: 'christophe@fake.email',
    },
];

/*const axiosMock = {
    get: vi.fn(),
};

vi.mock('axios', () => axiosMock);

vi.mock('../../../contexts/data.context.tsx', async () => {
    const actual = await vi.importActual('../../../contexts/data.context.tsx');
    return {
        ...actual,
        useData: vi.fn(() => ({
            customers: mockCustomers,
            orders: [],
            fetchCustomers: vi.fn(),
            fetchCustomerOrders: vi.fn(),
            error: null,
            isLoading: false,
        })),
    };
});*/

vi.mock('../../../contexts/data.context.tsx', async () => {
    const actual = await vi.importActual('../../../contexts/data.context.tsx');
    return {
        ...actual,
        useData: vi.fn(() => ({
            customers: mockCustomers,
            orders: [],
            fetchCustomers: vi.fn(),
            fetchCustomerOrders: vi.fn(),
            error: null,
            isLoading: false,
        })),
    };
});

/*vi.mock('axios', () => ({
    get: vi.fn((url) => {
        if (url === '/api/customers') {
            return Promise.resolve({ data: mockCustomers });
        }
        return Promise.reject(new Error('Not found'));
    }),
}));*/

describe('CustomerList', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('displays customers fetched from the API', async () => {
        useData.mockReturnValue({
            customers: mockCustomers,
            fetchCustomers: vi.fn(),
            fetchCustomerOrders: vi.fn(),
            error: null,
            isLoading: false,
        });

        render(
            <DataProvider>
                <CustomerList
                    handleSwitchTabs={(component = 'list') => component}
                />
            </DataProvider>
        );

        await waitFor(() => {
            mockCustomers.forEach((customer) => {
                expect(screen.getByText(customer.lastname)).toBeInTheDocument();
            });
        });
    });

    it('handles API errors gracefully', async () => {
        vi.mocked(useData).mockReturnValueOnce({
            customers: [],
            fetchCustomers: vi.fn(),
            fetchCustomerOrders: vi.fn(),
            error: 'Failed to fetch customers',
            isLoading: false,
        });

        render(
            <DataProvider>
                <CustomerList
                    handleSwitchTabs={(component = 'list') => component}
                />
            </DataProvider>
        );

        await waitFor(() => {
            expect(
                screen.getByText(/failed to fetch customers/i)
            ).toBeInTheDocument();
        });
    });
});
