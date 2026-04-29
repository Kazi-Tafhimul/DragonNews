import LeftSideBar from "@/components/shared/homepage/news/LeftSideBar";
import Image from "next/image";
async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;

}
export default async function Home(){
    const categories = await getCategories();
    return <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
        <div className="col-span-3">
            <LeftSideBar categories={categories}></LeftSideBar>
        </div>
        <div className="font-bold text-3xl col-span-6">
            All News
        </div>
        <div className="font-bold text-3xl col-span-3">
            Social icons
        </div>
    </div>
}