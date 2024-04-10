import { prisma } from "@/src/lib/prisma"
import CategoriIcon from "../ui/CategoriIcon"
import Logo from "../ui/Logo"

async function getCategories() {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  
  const categories = await getCategories()

  console.log(categories)
  
  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />
      <nav className="mt-10">
        {categories.map(category => (
          
          <CategoriIcon key={category.id} category={category}/>
        
        ))}
      </nav>
    </aside>
  )
}
