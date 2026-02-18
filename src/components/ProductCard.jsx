const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: ⭐ {product.rating}</p>

      <button
        className="bg-green-600 text-white px-3 py-1 mt-2 rounded"
        onClick={() => console.log(product.name)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
