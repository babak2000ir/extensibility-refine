import { useOne, BaseKey } from "@refinedev/core";

export const ProductCard = ({ id }: { id: BaseKey }) => {
    const { data, isLoading } = useOne({ resource: "products", id });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>Product name: { data?.data.name } </div>;
};