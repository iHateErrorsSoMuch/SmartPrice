import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    const searchTerm = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.store.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="app">
      <header className="header">
        <h1>SmartPrice</h1>
        <p>Compare prices. Find the better deal.</p>

        <input
          type="text"
          placeholder="Search for a product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <main>
        <h2>Products</h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>

              <p className="description">{product.description}</p>

              <p className="price">${product.price}</p>

              <p className="store">🏪 {product.store}</p>

              <p className="category">{product.category}</p>

              <button>View Deal</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
