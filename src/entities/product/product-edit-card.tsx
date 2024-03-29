import { useUpdate, BaseKey } from "@refinedev/core";

export const ProductEditCard = ({ id }: { id: BaseKey }) => {
    const { mutate, isLoading } = useUpdate();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const updatePrice = async () => {
        await mutate({
            resource: "products",
            id,
            values: {
                price: Math.floor(Math.random() * 100),
            }
        });
    };

    return (
        <div>
            <button onClick={updatePrice}>Update Price</button>
        </div>
    );
};