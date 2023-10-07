import CardComponent from "../components/Card";

export function Home({ products }) {
  return (
    <>
      <h1>Home</h1>
      <CardComponent key={products._id} products={products} />
    </>
  );
}
