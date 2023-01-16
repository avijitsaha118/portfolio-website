import React from 'react';
import './WhatIDo.css';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import javascript from '../../assets/images/javascript.png';
import tailwind from '../../assets/images/tailwind.png';
import mongo from '../../assets/images/mongodb.png';
import express from '../../assets/images/expressjs.png';
import react from '../../assets/images/react.png';
import node from '../../assets/images/node.jpg';

const WhatIDo = () => {
    return (
        <>
            <section id="service" class="service mt-12">
                <div class="container bg-base-100">
                    <div class="">
                        <div class="main_service_area sections grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
                            <div class="lg:ml-16">
                                <div class="signle_service_left">
                                    <h2>What
                                        I
                                        Do</h2>
                                </div>
                            </div>


                            <div class="mt-12">

                                <div>
                                    <div class="stack-card">
                                        <h3 class="stack-font text-white">Front End Web Development </h3>
                                        <div className='flex gap-1'>
                                            <img src={html} alt='vector' />
                                            <img src={css} alt='vector' />
                                            <img src={javascript} alt='vector' />
                                            <img src={tailwind} alt='vector' />
                                        </div>
                                        <p class="stack-font text-white">Create project with this Technology</p>
                                    </div>

                                    <div class="stack-card card-dark">
                                        <h3 class="stack-font text-white">Mern Stack Web Development</h3>
                                        <div className='flex gap-1'>
                                            <img src={mongo} />
                                            <img src={express} />
                                            <img src={react} />
                                            <img src={node} />
                                        </div>
                                        <p class="stack-font text-white">MERN Stack Web Technology</p>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default WhatIDo;