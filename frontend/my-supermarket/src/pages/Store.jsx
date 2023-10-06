import CardComponent from "../components/Card";

export function Store({ products }) {
  return (
    <>
      <h1>Store</h1>
      <CardComponent products={products} />
    </>
  );
}
