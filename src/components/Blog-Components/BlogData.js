import image from './imgs/2.jpg';
import image1 from './imgs/2.jpg';
import image2 from './imgs/2.jpg';
import image3 from './imgs/2.jpg';
import image4 from './imgs/2.jpg';
import image5 from './imgs/2.jpg';
import React from 'react'
import { Link } from "react-router-dom";
import ButtonEl from '../UI/Button/Button';

export default function BlogData() {
    const BlogData = [
        {
          image: image,
          title: 'Elevating Your Home with Trusted Maid Services',
          detail: 'Discover the benefits of our top-tier maid supply services that contribute to a harmonious and organized household.',
          more: 'Read More',
        },
        {
          image: image1,
          title: 'The Heart of Our Company: Exceptional Maid Professionals',
          detail: 'Meet the dedicated individuals who form the backbone of our reliable and trusted maid supply services.',
          more: 'Read More',
        },
        {
          image: image2,
          title: 'A Fresh Perspective on Domestic Assistance',
          detail: 'Explore the innovative approach we bring to domestic help services and how it enhances your everyday life.',
          more: 'Read More',
        },
        {
          image: image3,
          title: 'Creating Lasting Connections: The Alghawali Man Power Experience',
          detail: 'Learn about the personal touch we add to our maid supply services, ensuring a strong and lasting partnership with your family.',
          more: 'Read More',
        },
        {
          image: image4,
          title: 'Empowering Homes through Skilled and Compassionate Maids',
          detail: 'Discover how our maids empower households by providing reliable and caring assistance tailored to your needs.',
          more: 'Read More',
        },
        {
          image: image5,
          title: 'Crafting Cleaner and Happier Homes',
          detail: 'Explore the impact of our cleaning specialists on creating a hygienic and joyful living environment for your family.',
          more: 'Read More',
        },
      ];

    return (
        <>
            <div className="container">
                <div className="grid my-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">

                    {BlogData.map((item, index) => (

                        <div className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden">
                            <img src={item.image} alt="" />

                            <div className="content p-6">
                                <Link to="/blog-detail" className="text-lg hover:text-violet-600 dark:text-white dark:hover:text-violet-600 transition duration-500 ease-in-out font-medium h5">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.detail}</p>

                                <div className="mt-5">
                                    <Link to="" className="transition duration-500"><ButtonEl bgColor="#253061" hoverBgColor="#1c2b4d" buttonTxt={item.more} px={8}/></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
