import CardComponent from "../components/Card";

export function Store({ products }) {
  return (
    <>
      <h1>Store</h1>
      <CardComponent key={products._id} products={products} />
    </>
  );
}
