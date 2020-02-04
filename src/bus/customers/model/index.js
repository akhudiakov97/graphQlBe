import {customerDb} from '../db';
import generateId from "uuid/v1";

export const getCustomerById = (id) => {
    const customer = customerDb.find(customer => customer.id === id);

    if (!customer) {
        throw new Error(`We don't have a customer with id: ${id}`);
    }

    return {id, ...customer};
};

export const saveCustomer = (customer) => {
    const id = generateId();
    customerDb.push(customer);
    const savedBook = customerDb.find(customer => customer.id === id);

    return {id, ...savedBook};
};

export const removeCustomer = (id) => {
    const expectedCustomer = customerDb.find(customer => customer.id === id);
    const index = customerDb.findIndex(customer => customer.id === id);
    customerDb.splice(index, 1);

    return {id, ...expectedCustomer};
};

export const updateCustomer = (id, receivedCustomer) => {
    const previousCustomer = customerDb.find(customer => customer.id === id);
    const expectedBook = {
        ...previousCustomer,
        ...receivedCustomer
    };

    removeCustomer(id);

    customerDb.push(expectedBook);
    const savedCustomer = customerDb.find(customer => customer.id === id);

    return {id, ...savedCustomer};
};
