import CoffeeDetails from "@/app/_components/CoffeeDetails"
import { getCoffee } from "@/app/_lib/data-service"

async function Page({params}) {
    const coffee = await getCoffee(params.coffeeId)
    return (
        <CoffeeDetails coffee={coffee}/>
    )
}

export default Page
