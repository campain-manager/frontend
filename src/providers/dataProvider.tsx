import { DataProvider } from "@refinedev/core";
import { resources } from "@/api/resources";


function getResource(resource: string) {
    const api = resources[resource];

    if (!api) {
        throw new Error(
            `Resource "${resource}" is not configured`
        );
    }

    return api;
}

const dataProvider: DataProvider = {

    async getList({ resource }) {
        const api = getResource(resource);

        const response = await api.list();

        return {
            data: response.data,
            total: response.data.length,
        };
    },

    async getOne({ resource, id }) {
        const api = getResource(resource);

        const response = await api.getOne(id);

        return {
            data: response.data,
        };
    },

    async create({ resource, variables }) {
        const api = getResource(resource);

        const response = await api.create(variables);

        return {
            data: response.data,
        };
    },

    async update({ resource, id, variables }) {
        const api = getResource(resource);

        const response = await api.update(id, variables);

        return {
            data: response.data,
        };
    },

    async deleteOne({ resource, id }) {
        const api = getResource(resource);

        const response = await api.deleteOne(id);

        return {
            data: response.data,
        };
    },
};


export default {
    default: dataProvider,
};