import React from 'react';
import './Portfolio.css';
import tools1 from '../../../assets/images/tools.JPG';
import fruits1 from '../../../assets/images/fruits1.JPG';
import fruits2 from '../../../assets/images/fruits2.JPG';
import fruits3 from '../../../assets/images/fruits3.JPG';
import money1 from '../../../assets/images/money1.JPG';

const Portfolio = () => {
    return (
        <>
            <h3 className='text-center text-2xl'>My Portfolio</h3>
            <div className='w-full grid lg:grid-cols-3 sm:grid-cols-1 gap-4 ml-10 mt-6'>

                <div>
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <figure><img src={tools1} alt="Shoes" /></figure>
                        <div class="card-body">
                            {/* <h2 class="card-title"> */}
                            {/* Shoes! */}
                            {/* <div class="badge badge-secondary">NEW</div> */}
                            {/* </h2> */}

                            <div>

                                <h2 class="font-bold text-xl">Painting Tools Wholesaler Website</h2>

                                <div class="flex flex-wrap text-center pt-4 mb-2">

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Tailwind CSS</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">React</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Express</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Node.js</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">MongoDB</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Stripe</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">DaisyUI</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Firebase</div>

                                </div>

                                <p class="text-xs leading-relaxed text-black">This revolutionary email design kit is going to transform the way in which you send modern emails.</p>

                                <ul class="text-xs mt-4 list-disc list-inside text-black leading-relaxed">

                                    <li>Responsive</li>

                                    <li>Payment Gateway</li>

                                    <li>CRUD Operations</li>

                                    <li>Admin & User Dashboard</li>

                                </ul>

                            </div>


                            <div class="w-full sm:flex-1 grid gap-4 grid-cols-1 pt-6">

                                <a href="https://tools-manufacturer-website.web.app/" class="flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Explore Live</a>
                                <a href="https://github.com/avijitsaha118/painting-tools-manufacturer-client-side" class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">GitHub Cient Side</a>
                                <a href="https://github.com/avijitsaha118/paiting-tools-manufacturer-server-side" class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">GitHub Server Side</a>

                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <figure>

                            <div class="carousel w-full">
                                <div id="slide1" class="carousel-item relative w-full">
                                    <img src={fruits1} class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" class="btn btn-circle">❮</a>
                                        <a href="#slide2" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" class="carousel-item relative w-full">
                                    <img src={fruits2} class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" class="btn btn-circle">❮</a>
                                        <a href="#slide3" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" class="carousel-item relative w-full">
                                    <img src={fruits3} class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" class="btn btn-circle">❮</a>
                                        <a href="#slide4" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide4" class="carousel-item relative w-full">
                                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide3" class="btn btn-circle">❮</a>
                                        <a href="#slide1" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </figure>


                        {/* <figure><img src={tools1} alt="Shoes" /></figure> */}
                        <div class="card-body">
                            {/* <h2 class="card-title"> */}
                            {/* Shoes! */}
                            {/* <div class="badge badge-secondary">NEW</div> */}
                            {/* </h2> */}

                            <div>

                                <h2 class="font-bold text-xl">Warehouse Stock Management System</h2>

                                <div class="flex flex-wrap text-center pt-4 mb-2">

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">React</div>

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Bootstrap</div>

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Node.js</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Express</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">MongoDB</div>
                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Firebase</div>

                                </div>

                                <p class="text-xs leading-relaxed text-black">This revolutionary email design kit is going to transform the way in which you send modern emails.</p>

                                <ul class="text-xs mt-4 list-disc list-inside text-black leading-relaxed">

                                    <li>Responsive</li>

                                    <li>Login System</li>

                                    <li>CRUD Opperations</li>

                                    <li>Separetly Show User Items</li>

                                </ul>

                            </div>


                            <div class="w-full sm:flex-1 grid gap-4 grid-cols-1 pt-6">

                                <a href="https://tools-manufacturer-website.web.app/" class="flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Explore Live</a>
                                <a href="https://github.com/avijitsaha118/warehouse-stock-management-client-side" class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">GitHub Cient Side</a>
                                <a href="https://github.com/avijitsaha118/warehouse-stock-management-server-side" class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">GitHub Server Side</a>

                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div class="card w-96 bg-base-200 shadow-xl">
                        <figure><img src={money1} alt="Shoes" /></figure>
                        <div class="card-body">
                            {/* <h2 class="card-title"> */}
                            {/* Shoes! */}
                            {/* <div class="badge badge-secondary">NEW</div> */}
                            {/* </h2> */}

                            <div>

                                <h2 class="font-bold text-xl">Income-Expense-Saving Calculation</h2>

                                <div class="flex flex-wrap text-center pt-4 mb-2">

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">HTML</div>

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">CSS</div>

                                    <div class="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">JavaScript</div>
                                    <div class="invisible mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">JavaScript</div>
                                    <div class="invisible mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">JavaScript</div>
                                    <div class="invisible mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">JavaScript</div>

                                </div>

                                <p class="text-xs leading-relaxed text-black">This revolutionary email design kit is going to transform the way in which you send modern emails.</p>

                                <ul class="text-xs mt-4 list-disc list-inside text-black leading-relaxed">

                                    <li>Responsive</li>

                                    <li> Mobile-friendly</li>

                                    <li> Media queries</li>

                                    <li> 20MB of JavaScript</li>

                                </ul>

                            </div>


                            <div class="w-full sm:flex-1 grid gap-4 grid-cols-1 pt-6">

                                <a href="https://money-maestro-d446e8.netlify.app/" class="flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Explore Live</a>
                                <a href="https://github.com/avijitsaha118/income-expense-savings-website-by-js" class="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">GitHub Link</a>
                                <a href="https://github.com/avijitsaha118/income-expense-savings-website-by-js" class="invisible w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">GitHub Link</a>


                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Portfolio;