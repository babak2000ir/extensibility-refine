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
    getList: async ({ resource, pagination = { current: 1, pageSize: 10 }, filters, sorters, meta }) => {
        console.log("getList", { resource, pagination, filters, sorters, meta });

        const params = new URLSearchParams();
        if (pagination) {
            const start = (pagination && pagination?.current && pagination?.pageSize) ? (pagination.current - 1) * pagination.pageSize : 0;
            const end = (pagination && pagination?.current && pagination?.pageSize) ? pagination.current * pagination.pageSize : 10;
            params.append("_start", start.toString());
            params.append("_end", end.toString());
        }

        if (sorters && sorters.length > 0) {
            params.append("_sort", sorters.map((sorter) => sorter.field).join(","));
            params.append("_order", sorters.map((sorter) => sorter.order).join(","));
        }

        if (filters && filters.length > 0) {
            filters.forEach((filter) => {
                if ("field" in filter && filter.operator === "eq") {
                    // Our fake API supports "eq" operator by simply appending the field name and value to the query string.
                    params.append(filter.field, filter.value);
                }
            });
        }

        const response = await fetch(`${API_URL}/${resource}?${params.toString()}`);

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