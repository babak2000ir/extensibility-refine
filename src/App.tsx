import { Refine } from "@refinedev/core";
import { dataProvider } from "./providers/data-provider";
import { ProductCard } from "./entities/product/product-card";
import './App.css'
import { ProductEditCard } from "./entities/product/product-edit-card";
import { ProductList } from "./entities/product/product-list";
import { ProductTable } from "./entities/product/product-table";
import { ProductCreate } from "./entities/product/product-create";

function App() {
  return (
    <Refine dataProvider={dataProvider}>
      <ProductCreate />
      <ProductList />
      <ProductCard id="123" />
      <ProductEditCard id="123" />
      <ProductTable />
    </Refine>
  )
}

export default App
