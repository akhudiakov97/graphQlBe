import {customerDb} from "./db";
import {ApolloError} from "apollo-server-errors";
import {getCustomerById} from "./model";

export const queries = {
    customers: () => customerDb,
    customer: (_, {id}) => {
        try {
            return getCustomerById(id);
        } catch ({message}) {
            throw new ApolloError(message);
        }
    }
};
