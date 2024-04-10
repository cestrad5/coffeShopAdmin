"use client";

import { Product } from "@prisma/client";
import { useStore } from "@/src/store";


type AddButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddButtonProps) {
  const addToOrder = useStore(state => state.addToOrder);
  
  
  return (
    <button
      type="button"
      className="bg-indigo-500 hover:bg-indigo-700 text-white w-full mt-5 p-3 font-bold uppercase cursor-pointer rounded"
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  );
}
