import React, { useEffect } from "react";
import App from "./App";
import Avatar from "./Avatar";
import Carousel from "./Carousel";
import Goal from "./Goal.jsx";
import Typewriter from 'typewriter-effect/dist/core';
import NewYearReo from "./NewYearReo.jsx";


const Test = () => {



    useEffect(() => {

        new Typewriter('#typed', {
            strings: [' Fronted Developer', ' Backend Developer',' Creative thinker',' BathRoom Singer 😅'],
            autoStart: true,
            loop: true,
            cursor: '|',
            delay: 75,
        });

        new Typewriter('#next', {
            strings: ['Under Construction', 'I Code this only in 1.5 days', 'Lotes of amimation and detailing work are left ' , 'But After this make its on the next level'],
            autoStart: true,
            loop: true,
            cursor: '|',
            delay: 75,
        });
    }, []);

    return (
        <>



            <div className=" overflow-x-hidden  w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-blue-300  ">
                {/* Navbar */}
                <nav className="flex items-center justify-between px-6 py-4 bg-white bg-opacity-10 backdrop-blur-md rounded-md m-4">
                    <h1 className="text-xl font-bold text-orange-500">AbhiTheShek</h1>
                    <ul className="flex space-x-8 text-black font-medium">
                        <li><a href="#home" className="hover:text-purple-700">Home</a></li>
                        <li><a href="#about" className="hover:text-purple-700">About</a></li>
                        <li><a href="#services" className="hover:text-purple-700">Services</a></li>
                        <li><a href="#contact" className="hover:text-purple-700">Contact</a></li>
                    </ul>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600">Hire me</button>
                </nav>

               

                <div className="w-full min-h-[100vh]  px-4 mb-4 flex flex-col gap-3  ">

                      {/* page1 */}
                    <div className=" w-full min-h-[90vh] flex flex-col md:flex-row  items-center text-center md:text-left  justify-center bg-white bg-opacity-10 backdrop-blur-md rounded-lg  ">
                        <div className=" flex flex-col justify-center items-center md:items-end left h-full w-1/2 ml-4">
                            <div className="detail">
                                <span className=" inline-block text-6xl pb-8">Hii, There</span>
                                <br />
                                <span className="text-5xl">I`m</span> <span className="text-yellow-600 text-5xl">Abhishek</span> <span className="text-5xl">Yadav</span>
                                <br />
                                <span className="text-4xl mt-6 inline-block">I`m a  </span>
                                <span className="text-yellow-700 text-4xl" id="typed"> Developer</span>
                                <br />
                                <span className="inline-block text-lg text-light text-gray-500">
                                    More Than Code: My Creative Process
                                </span>
                                <br />
                                <button className="text-sm inline-block bg-yellow-600 px-5 py-3 rounded-lg hover:bg-yellow-500 shadow-lg transition">
                                    Download CV
                                </button>
                            </div>



                        </div>
                        <div className=" Right h-full w-1/2 mr-4 flex items-center justify-center">
                            <Avatar />
                        </div>

                    </div>
   
                    {/* page2 */}
                    <div className="w-full min-h-full flex flex-col md:flex-row items-center justify-center  bg-white bg-opacity-10 backdrop-blur-md  rounded-lg gap-2 ">
                        <div className=" left h-[80vh] w-full md:w-1/2 ml-4">
                            <div className="profile-card h-[80vh] w-full backdrop-blur-lg bg-opacity-50 bg-yellow-200 p-4">
                                <div className="flex items-center mb-4">
                                    <img
                                        alt="Profile picture of a cartoon character"
                                        className="rounded-full mr-4"
                                        height="100"
                                        src="https://storage.googleapis.com/a1aa/image/y1EuIwDW95bxEJPQzVjEo9GSS7nEdIBZrStdyz2qgDxucg6E.jpg"
                                        width="100"
                                    />
                                    <div>
                                        <p>
                                            Name: <span className="font-bold text-blue-400">Abhishek Yadav</span>
                                        </p>
                                        <p>
                                            Age: <span className="font-bold text-blue-400">20</span>
                                        </p>
                                        <p>
                                            From: <span className="font-bold text-blue-400">India</span>
                                        </p>
                                    </div>
                                </div>
                                <h2 className="font-bold text-lg mb-2">SKILLS</h2>
                                <div>
                                    <p>WebGL</p>
                                    <div className="skills-bar bg-gray-200 rounded-lg">
                                        <div style={{ width: "80%" }} className="bg-yellow-600 h-2 rounded-lg"></div>
                                    </div>
                                    <p>ReactJS</p>
                                    <div className="skills-bar bg-gray-200 rounded-lg">
                                        <div style={{ width: "70%" }} className="bg-yellow-600 h-2 rounded-lg"></div>
                                    </div>
                                    <p>JavaScript</p>
                                    <div className="skills-bar bg-gray-200 rounded-lg">
                                        <div style={{ width: "60%" }} className="bg-yellow-600 h-2 rounded-lg"></div>
                                    </div>
                                    <p>HTML + CSS</p>
                                    <div className="skills-bar bg-gray-200 rounded-lg">
                                        <div style={{ width: "90%" }} className="bg-yellow-600 h-2 rounded-lg"></div>
                                    </div>
                                    <p>Backend</p>
                                    <div className="skills-bar bg-gray-200 rounded-lg">
                                        <div style={{ width: "50%" }} className="bg-yellow-600 h-2 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=" flex flex-col justify-center items-center Right h-full md:w-1/2 w-full mr-4">
                            <div className="inner rounded-lg w-full h-full md:h-[80vh] flex flex-wrap gap-4 items-center justify-center bg-blue-100 p-4 mt-6 mb-6">
                                <div className="p-1 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/html-5.png" alt="HTML Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/css-3.png" alt="CSS Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/js.png" alt="JavaScript Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Material UI.png" alt="Material UI Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Tailwind CSS.png" alt="Tailwind CSS Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Python.png" alt="Python Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/React.png" alt="React Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Redux.png" alt="Redux Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/TypeScript.png" alt="TypeScript Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Node.js.png" alt="Node.js Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/NPM.png" alt="NPM Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Express.png" alt="Express Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Postman.png" alt="Postman Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Nodemon.png" alt="Nodemon Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/MongoDB.png" alt="MongoDB Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Mongoose.js.png" alt="Mongoose.js Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Three.js.png" alt="Three.js Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Next.js.png" alt="Next.js Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                                <div className="p-2 rounded-lg hover:bg-yellow-400">
                                    <img src="./webIcon/Blender.png" alt="Blender Icon" className="h-12 w-12 md:h-16 md:w-16" />
                                </div>
                            </div>

                        </div>

                    </div>

                      {/* page3 */}
                    <div className=" relative w-full  min-h-screen flex  rounded-lg mr-4">
                        <Carousel />
                    </div>

                    {/* page4 */}
                    <div className="w-full h-screen flex bg-white bg-opacity-10 backdrop-blur-md rounded-lg ">
                        <div className="w-full h-screen">
                            <App />
                        </div>

                    </div>

                    {/* page5 */}
                    <div className="w-full min-h-screen md:flex-row justify-center items-center flex flex-col    bg-white bg-opacity-10 backdrop-blur-md  rounded-lg ">
                        <Goal></Goal>

                    </div>

                    {/* page6 */}
                    <div className="w-full min-h-screen  justify-center items-center flex flex-col    bg-white bg-opacity-10 backdrop-blur-md  rounded-lg ">

                        <h1 className="text-4xl text-orange-600 font-black">🌟🎯🚀💡 New Year Resolutions 👨‍💻💪📈✨ </h1>
                       <NewYearReo/>

                    </div>

                    {/* page7 */}
                    <div className="w-full min-h-screen  justify-center items-center flex    bg-white bg-opacity-10 backdrop-blur-md  rounded-lg ">

                        <h1 id="next" className=" text-4xl text-orange-600 font-black"></h1>

                    </div>

                </div >
            </div>

        </>
    );
};

export default Test;

