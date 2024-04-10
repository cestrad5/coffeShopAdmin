import ProductsCard from "@/components/products/ProductsCard"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

async function getProducts(category: string) {
  return await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })
}



export default async function OrderPage({params}: {params: {category: string}}) {
  const products = await getProducts(params.category)
  return (
    <>
    <Heading>Personaliza tu pedido</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-start">
        {products.map(product => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
