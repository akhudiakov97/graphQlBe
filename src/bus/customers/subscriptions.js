// Core
import {pubSub} from '../../init/pubSub';

// Events
import {events} from './events';

export const subscriptions = {
    CUSTOMERS: {
        subscribe: () => pubSub.asyncIterator([events.CUSTOMER_ADDED, events.CUSTOMER_UPDATED])
    }
};
