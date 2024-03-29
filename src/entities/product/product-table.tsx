import React from "react";
import { useDataGrid } from "@refinedev/mui";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const ProductTable: React.FC = () => {
    const { dataGridProps } = useDataGrid<IProduct>({
        resource: "products",
    });

    const columns = React.useMemo<GridColDef<IProduct>[]>(
        () => [
            {
                field: "id",
                headerName: "ID",
                type: "number",
                width: 50,
            },
            { field: "name", headerName: "Name", minWidth: 400, flex: 1 },
            { field: "price", headerName: "Price", minWidth: 120, flex: 0.3 },
        ],
        [],
    );

    return (
        <div style={{ padding:"4px" }}>
            <h2>Products</h2>
            <DataGrid
                {...dataGridProps}
                columns={columns}
                onFilterModelChange={(model, details) => {
                    // Handle filter model change
                    console.log(model, details);
                }}
            />
        </div>
    );
};

interface IProduct {
    id: number;
    name: string;
    price: string;
}