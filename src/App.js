import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
  };

  const total = products.reduce((result, prod) => result + prod.price, 0);

  return (
    <div className="App" style={{ padding: 20 }}>
      <input
        value={name}
        placeholder="nhap ten san pham"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={price}
        placeholder="nhap gia san pham"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit}>Them san pham</button>
      <h2>Total: ${total}</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name},{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
