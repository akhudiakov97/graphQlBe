import {removeCustomer, saveCustomer, updateCustomer} from "./model";
import {pubSub} from '../../init/pubSub';
import {events} from "../books/events";

export const mutations = {
    addCustomer: (_, {book}) => {
        const savedCustomer = saveCustomer(book);
        pubSub.publish(events.CUSTOMER_ADDED, {
            customer: savedCustomer
        });

        return savedCustomer;
    },

    removeCustomer: (_, {id}) => {
        return removeCustomer(id);
    },
    updateCustomer: (_, {id, customer}) => {
        const updatedCustomer = updateCustomer(id, customer);
        pubSub.publish(events.CUSTOMER_UPDATED, {
            customer: updatedCustomer
        });

        return updatedCustomer;
    }

};
