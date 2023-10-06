import CardComponent from "../components/Card";

export function About({ products }) {
  return (
    <>
      <h1>About</h1>
      <CardComponent products={products} />
    </>
  );
}
