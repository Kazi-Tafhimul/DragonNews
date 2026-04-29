import LeftSideBar from "@/components/shared/homepage/news/LeftSideBar";
import RightSidebar from "@/components/shared/homepage/news/RightSidebar";
import Image from "next/image";
async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;

}
async function getNewsByCategoriesId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    return data.data;

}
export default async function Home(){
    const categories = await getCategories();
    const news = await getNewsByCategoriesId("01")
    return <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
        <div className="col-span-3">
            <LeftSideBar categories={categories}></LeftSideBar>
        </div>
        <div className="font-bold col-span-6">
            All News
            <div className="space-y-4">

            {
                news.map(n => {
                    return <div key={n._id} className="p-6 rounded-md border"> {n.title}
                    </div>
                       
                })
            }
            </div>
        </div>
        <div className="col-span-3">
            <RightSidebar></RightSidebar>
        </div>
    </div>
}