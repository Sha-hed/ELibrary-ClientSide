import { useEffect } from 'react';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import axios from 'axios';
import { useState } from 'react';
import CategoryCard from '../Components/CategoryCard';

const Home = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/cat')
            .then(data => setCategory(data.data));

    }, [])

    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-bold text-center  my-10'>Books Categories</h1>

            <div className='max-w-6xl mx-auto gap-y-5 grid grid-cols-2'>
                {
                    category.map(cat => <CategoryCard cat={cat} key={cat._id}></CategoryCard>)
                }
            </div>
        </>

    );
};

export default Home;