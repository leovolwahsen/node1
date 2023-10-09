import CartComponent from "../components/Cart";

export function Store({ products }) {
  return (
    <>
      <h1>Store</h1>
      <CartComponent key={products._id} products={products} />
    </>
  );
}
