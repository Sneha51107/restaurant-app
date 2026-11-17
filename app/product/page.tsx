"use client";
import CreateProduct from "./createproduct";
import { useQuery } from "@tanstack/react-query";

export default function Product() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h1>Products</h1>

      {data.map((product: any) => (
        <p key={product.id}>{product.title}</p>
      ))}
        <CreateProduct />
    </div>
  );
}
