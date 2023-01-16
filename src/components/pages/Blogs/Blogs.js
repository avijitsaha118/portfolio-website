import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div class="container-fluid pt-5" id="blog">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white">Blog</h1>
                    <h1 class="position-absolute text-uppercase text-info">Latest Blog</h1>
                </div>

                <div class="blog-main">
                    <h1>Read Two Meanutes Blog and Stay Tuned</h1>
                    <ul class="cards">
                        <li class="cards_item">
                            <div class="blog-card">
                                <div class="card_image"><img class="blog-img" src="https://i.ibb.co/dMgsN0Q/blog-1-1.png" />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">Connect MongoDB to Your React Project</h2>
                                    <p class="card_text">First, create a back-end site for your react project. I use node.js
                                        and express framework to connect project to server</p>
                                    <a class="blog-btn card_btn"
                                        href="https://medium.com/@sahaavijit908/connect-mongodb-to-your-react-project-97d6cee146c6">Read
                                        More</a>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item">
                            <div class="blog-card">
                                <div class="card_image"><img class="blog-img" src="https://i.ibb.co/KhFbxrF/blog-1-2.png" />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">Authenticate Google and GitHub account Using Firebase</h2>
                                    <p class="card_text">Follow a few simple steps to add a login system by using Google or
                                        GitHub account to your web project. Similiarly you can add other socail platform</p>
                                    <a class="blog-btn card_btn"
                                        href="https://medium.com/@sahaavijit908/authenticate-google-and-github-account-using-firebase-e36f0436152e">Read
                                        More</a>
                                </div>
                            </div>
                        </li>
                        <li class="cards_item">
                            <div class="blog-card">
                                <div class="card_image"><img class="blog-img" src="https://i.ibb.co/LrcdFzn/blog-3.jpg" />
                                </div>
                                <div class="card_content">
                                    <h2 class="card_title">React Firebase Hook to Use Easy Firebase Authentication</h2>
                                    <p class="card_text">After install this hook , authentication much easier. Login ,
                                        register or reset password using; everything you need to done by this hook</p>

                                    <a class="blog-btn card_btn"
                                        href="https://github.com/CSFrequency/react-firebase-hooks">Read More</a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>



                {/* <div class="row">
                    <div class="col-lg-4 mb-5">
                        <div class="position-relative mb-4">
                            <img class="img-fluid rounded w-100" src="img/blog-1.jpg" alt="" />
                            <div class="blog-date">
                                <h4 class="font-weight-bold mb-n1">01</h4>
                                <small class="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <h5 class="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
                        </h5>
                        <a class="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
                    </div>
                    <div class="col-lg-4 mb-5">
                        <div class="position-relative mb-4">
                            <img class="img-fluid rounded w-100" src="img/blog-2.jpg" alt="" />
                            <div class="blog-date">
                                <h4 class="font-weight-bold mb-n1">01</h4>
                                <small class="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <h5 class="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
                        </h5>
                        <a class="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
                    </div>
                    <div class="col-lg-4 mb-5">
                        <div class="position-relative mb-4">
                            <img class="img-fluid rounded w-100" src="img/blog-3.jpg" alt="" />
                            <div class="blog-date">
                                <h4 class="font-weight-bold mb-n1">01</h4>
                                <small class="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <h5 class="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
                        </h5>
                        <a class="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Blogs;