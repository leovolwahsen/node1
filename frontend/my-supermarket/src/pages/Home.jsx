import CartComponent from "../components/Cart";

export function Home({ products }) {
  return (
    <>
      <h1>Home</h1>
      <CartComponent key={products._id} products={products} />
    </>
  );
}
