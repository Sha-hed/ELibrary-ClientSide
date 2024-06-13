import { useEffect } from 'react';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import Banner2 from '../assets/images/Banner2.jpg';
import Banner1 from '../assets/images/Banner1.png';
import Banner3 from '../assets/images/Banner3.png';
import Banner4 from '../assets/images/Banner4.png';
import axios from 'axios';
import { useState } from 'react';
import CategoryCard from '../Components/CategoryCard';

const Home = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get('https://assignment-11-server-side-red.vercel.app/cat')
            .then(data => setCategory(data.data));

    }, [])

    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img src={img1} className="w-full" />
                    <div className="pl-2 md:pl-20 w-full md:w-1/2 text-xl font-bold text-white absolute transform left-5 right-5 top-1/3">
                        <p>A book is the only place in which you can examine a fragile thought without breaking it, or explore an explosive idea without fear it will go off in your face. It is one of the few havens remaining where a man's mind can get both provocation and privacy." - Edward P. Morgan</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src={img2} className="w-full" />
                    <div className="pl-2 md:pl-20 w-full md:w-1/2 text-xl font-bold text-white absolute transform left-5 right-5 top-1/3">
                        <p>A book is the only place in which you can examine a fragile thought without breaking it, or explore an explosive idea without fear it will go off in your face. It is one of the few havens remaining where a man's mind can get both provocation and privacy." - Edward P. Morgan</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src={img3} className="w-full" />
                    <div className="pl-2 md:pl-20 w-full md:w-1/2 text-xl font-bold absolute transform left-5 right-5 top-1/3">
                        <p>A book is the only place in which you can examine a fragile thought without breaking it, or explore an explosive idea without fear it will go off in your face. It is one of the few havens remaining where a man's mind can get both provocation and privacy." - Edward P. Morgan</p>
                    </div>
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
            {/* Popular Blog Page */}

            <div className='mt-20 mb-5'>
                <h1 className='text-center font-bold text-4xl underline mb-10'>Popular Articles</h1>
                <section className="dark:bg-gray-100 dark:text-gray-800">
                    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                            <img src={Banner1} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">6 New Books We Recommend This Week</h3>
                                <span className="text-xs dark:text-gray-600">Suggested reading from critics and editors at The New York Times.</span>
                                <p>It’s a happy coincidence that we recommend Becca Rothfeld’s essay collection “All Things Are Too Small” — a critic’s manifesto “in praise of excess,” as her subtitle has it — in the same week that we also recommend Justin Taylor’s maximalist new novel “Reboot,” an exuberant satire of modern society that stuffs everything from fandom to TV retreads to the rise of conspiracy culture into its craw. I don’t know if Rothfeld has read Taylor’s novel, but I get the feeling she would approve. Maybe you will too: In the spirit of “more, bigger, louder,” why not pick those up together?</p>
                            </div>
                        </a>
                        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Banner2} />
                                <div className="px-2 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Protect the Freedom To Read With Book Resumes</h3>
                                    <p>Book Resumes are free resources for teachers, librarians, parents, and community advocates to use to support frequently challenged books. These documents contain reviews from professional trade review journals, links to resources and relevant media, and, where possible, more information about how books have been successfully retained in school.</p>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Banner3} />
                                <div className="px-2 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Start Reading Happy Place by Emily Henry</h3>
                                    <p>A patient is in the hospital, and I get to discharge them. Someone needs blood drawn, and I’m there to do it. Data needs to be plugged into the computer system, and I plug it in. There’s a before and an after, with a hard line between them, proof that there are millions of small things you can do to make life a little better.</p>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Banner4} />
                                <div className="px-2 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Late Admissions Review: Glenn Lourys Rise, Fall and Rise</h3>
                                    <p></p>In 1984, when he was 35, Glenn Loury made Martin Luther King’s widow cry. A young black professor at Harvard, he was addressing a meeting of African-American political leaders in Washington, and as he spoke, he could see that Coretta Scott King had tears in her eyes. Casting his mind back to that moment, he writes in “Late Admissions”—his memoir—that
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Contact Us Page */}
            <div className='my-10'>
                <section className="mt-10 py-10 dark:bg-gray-100 dark:text-gray-900">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4 ">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Level-4, 34, Awal Centre, Banani, Dhaka</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>Helpline: 01322901105</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>abc12345@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <form noValidate="" className="flex flex-col py-10 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Full name</span>
                                <input type="text" placeholder="Enter Your Name" className="p-3 outline-none block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Email address</span>
                                <input type="email" placeholder="Enter Your Email" className="p-3 outline-none block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                            </label>
                            <label className="block">
                                <span className="mb-1 text-xl font-medium">Message</span>
                                <textarea placeholder="Write Your Message" rows="4" className="p-3 outline-none block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
                            </label>
                            <button type="button" className="outline-none self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </>

    );
};

export default Home;