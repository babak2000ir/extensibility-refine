import type { DataProvider } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";

export const dataProvider: DataProvider = {
    getOne: async ({ resource, id, meta }) => {
        console.log("getOne", { resource, id, meta });
        const response = await fetch(`${API_URL}/${resource}/${id}`);
        if (response.status < 200 || response.status > 299) throw response;
        const data = await response.json();
        return { data };
    },
    update: async ({ resource, id, variables, meta }) => {
        console.log("update", { resource, id, variables, meta });
        const response = await fetch(`${API_URL}/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(variables),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status < 200 || response.status > 299) throw response;
        const data = await response.json();
        return { data };
    },
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        console.log("getList", { resource, pagination, filters, sorters, meta });
        const response = await fetch(`${API_URL}/${resource}`);

        if (response.status < 200 || response.status > 299) throw response;

        const data = await response.json();

        return {
            data,
            total: 0, // We'll cover this in the next steps.
        };
    },
    create: () => {
        throw new Error("Not implemented");
    },
    deleteOne: () => {
        throw new Error("Not implemented");
    },
    getApiUrl: () => API_URL,
    // Optional methods:
    // getMany: () => { /* ... */ },
    // createMany: () => { /* ... */ },
    // deleteMany: () => { /* ... */ },
    // updateMany: () => { /* ... */ },
    // custom: () => { /* ... */ },
};