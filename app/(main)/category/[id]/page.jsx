import LeftSideBar from '@/components/shared/homepage/news/LeftSideBar';
import RightSidebar from '@/components/shared/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoriesId } from '@/lib/data';
import React from 'react';


const NewsCategoryPage = async ({params}) => {
    const {id}= await params;
    const categories = await getCategories();
    const news = await getNewsByCategoriesId(id)
    return (
        <div>
            <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
                    <div className="col-span-3">
                        <LeftSideBar categories={categories} active_id={id}></LeftSideBar>
                    </div>
                    <div className="font-bold col-span-6">
                        All News
                        <div className="space-y-4">
            
                        {
                           news.length>0 ? news.map(n => {
                                return <div key={n._id} className="p-6 rounded-md border"> {n.title}
                                </div>
                                   
                            }): <h2 className='font-bold text-4xl text-center my-7'>No news found</h2>
                        }
                        </div>
                    </div>
                    <div className="col-span-3">
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            
        </div>
    );
};

export default NewsCategoryPage;