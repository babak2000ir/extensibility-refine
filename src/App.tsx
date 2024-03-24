import { Refine } from "@refinedev/core";
import { dataProvider } from "./providers/data-provider";
import { ProductCard } from "./entities/product/product-card";
import './App.css'

function App() {
  return (
    <Refine dataProvider={dataProvider}>
      <ProductCard id="123" />
    </Refine>
  )
}

export default App
