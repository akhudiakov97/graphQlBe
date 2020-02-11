// Mutations
import {mutations as booksMutations} from '../bus/books/mutations';
import {mutations as usersMutations} from '../bus/users/mutations';
import {mutations as customersMutations} from '../bus/customers/mutations';


export const Mutation = {
    ...booksMutations,
    ...usersMutations,
    ...customersMutations,
};
