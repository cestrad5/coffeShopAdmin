import { z } from "zod";


export const OrderSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  total: z.number().min(1, { message: "El total debe ser mayor a 0" }),
  order: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    image: z.string(),
    quantity: z.number(),
    subtotal: z.number()
  }))
});

export const OrderIdSchema = z.object({
  orderId: z.string()
    .transform((value) => parseInt(value))
    .refine((value) =>!isNaN(value), { message: "El id debe ser un número" })
});

export const SearchSchema = z.object({
  search: z.string()
  .trim()  
  .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
});

export const ProductSchema = z.object({
  name: z.string()
      .trim()
      .min(1, { message: 'El Nombre del Producto no puede ir vacio'}),
  price: z.string()
      .trim()
      .transform((value) => parseFloat(value)) 
      .refine((value) => value > 0, { message: 'Precio no válido' })
      .or(z.number().min(1, {message: 'La Categoría es Obligatoria' })),
  categoryId: z.string()
      .trim()
      .transform((value) => parseInt(value)) 
      .refine((value) => value > 0, { message: 'La Categoría es Obligatoria' })
      .or(z.number().min(1, {message: 'La Categoría es Obligatoria' })),
  image: z.string().min(1, { message: 'La Imagen es Obligatoria' }),
})