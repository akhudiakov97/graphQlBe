// Subscriptions
import {subscriptions as userSubscription} from '../bus/users/subscriptions';
import {subscriptions as bookSubscription} from '../bus/books/subscriptions';
import {subscriptions as customersSubscriptions} from '../bus/customers/subscriptions';


export const Subscription = {
    ...userSubscription,
    ...bookSubscription,
    ...customersSubscriptions,
};
