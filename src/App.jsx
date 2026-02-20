import { useState } from "react";
import { products as productData } from "./data/products";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";


const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  let filteredProducts = productData
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category ? product.category === category : true
    );

  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <Navbar />
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
