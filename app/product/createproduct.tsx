"use client";

import { useMutation } from "@tanstack/react-query";

export default function CreateProduct() {

  const mutation = useMutation({
    mutationFn: async (newProduct: any) => {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      return res.json();
    },
  });

  return (
    <div>

      <button
        onClick={() =>
          mutation.mutate({
            title: "New Product",
            price: 200,
          })
        }
      >
        Add Product
      </button>

    </div>
  );
}