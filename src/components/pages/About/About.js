import React from 'react';
import './About.css';
import img1 from '../../../assets/images/about.jpg';

const About = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img1} alt='banner' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">MERN Stack & Jr. Front End Developer</h1>
                    <p class="py-6">I use React.js , Node.js , Express.js and MongoDB as a database for full stack project. Behind i learn, practice and implemnt html5, css3, bootstrap, tailwind, JavaScript to develop front end web application.</p>

                    <div class="grid lg:grid-cols-2 sm:grid-cols-1">
                        <div>
                            <div class="col-sm-6">
                                <h6>Name: <span class="text-primary">Avijit Saha</span></h6>
                            </div>
                            <div class="col-sm-6">
                                <h6>Phone: <span class="text-primary">+880 1676391118</span></h6>
                            </div>
                            <div class="col-sm-6">
                                <h6>Address: <span class="text-primary">Dhaka, Bangladesh</span></h6>
                            </div>

                        </div>

                        <div>
                            <div class="col-sm-6">
                                <h6>Education: <span class="text-primary">B.Sc (Hon's) in CSE</span></h6>
                            </div>
                            <div class="col-sm-6">
                                <h6>Email: <span class="text-primary">avijitsaha.web@gmail.com</span></h6>
                            </div>

                            <div class="col-sm-6">
                                <h6>Involved In: <span class="text-primary">www.vatcraftbd.com (Site Maintainance)</span>
                                </h6>
                            </div>

                        </div>

                    </div>

                    <a href='https://www.linkedin.com/in/avijitsaha118/' class="btn btn-primary mt-3">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default About;