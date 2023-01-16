import React from 'react';
import profile1 from '../../assets/images/profile1.png';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import DemoProjectGrid from './DemoProject';
import FeaturedProjects from './FeaturedProjects';
import Portfolio from './Portfolio/Portfolio';
import WhatIDo from './WhatIDo';

const Home = () => {
    return (
        <>
        <div className='mt-4 bg-base-100'>
            <div class="hero min-h-min bg-base-primary">
                <div class="hero-content grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
                    <div class="avatar">
                        <div class="w-72 rounded-full ring ring-accent ring-offset-base-100 ring-offset-8 lg:ml-64">
                            <img src={profile1} alt='profile-avatar' />
                        </div>
                    </div>

                    <div>
                        <div className='lg:mr-64'>
                            <p className='text-accent'>  Jr. Frontend-developer</p>
                            <h1 class="text-5xl font-bold">Avijit Saha</h1>
                            <p class="py-6">I started web developing as my passion. I use html, css, css framework, JavaScript, react etc for developing.</p>
                            <button class="btn btn-outline btn-primary">Resume</button>
                            <button class="btn btn-outline btn-primary ml-3">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WhatIDo></WhatIDo>
        <About></About>
         {/* <FeaturedProjects> </FeaturedProjects> */}
        <Portfolio></Portfolio>
        <Blogs></Blogs>
        </>
    );
};

export default Home;