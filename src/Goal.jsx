import React from 'react'


const Goal = () => {
    return (
        <div className="max-w-full mx-auto p-6">
            <h1 className=' text-center text-4xl font-black text-orange-500 '><span className='text-4xl'>🚀 </span>Goals for 2025 🚀</h1>
        <div className="flex flex-col md:flex-wrap md:flex-row gap-12 items-center justify-center py-8">
          {/* Course Item */}
          <div className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative transition-transform hover:scale-105 hover:shadow-xl">
            {/* Circle Effect */}
            <div className="circle absolute top-[-75px] right-[-75px] h-32 w-32 bg-yellow-500 rounded-full transition-transform duration-500 group-hover:scale-[9]"></div>
            <div className="relative z-10 m-6">
              <h2 className="text-white font-bold text-2xl mb-4">
              <span className=' text-red-500 font-extrabold'>ML</span>:To make decisions without explicit programming.
              </h2>
              <p className="text-white text-lg">
                Start: <span className="text-yellow-400 font-bold">04.11.2022</span>
              </p>
            </div>
          </div>

          <div className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative transition-transform hover:scale-105 hover:shadow-xl">
            {/* Circle Effect */}
            <div className="circle absolute top-[-75px] right-[-75px] h-32 w-32 bg-red-500 rounded-full transition-transform duration-500 group-hover:scale-[9]"></div>
            <div className="relative z-10 m-6">
              <h2 className="text-white font-bold text-2xl mb-4">
             <span className='text-yellow-500 '> DevOps</span>: enhance the delivery of high-quality software. 
              </h2>
              <p className="text-white text-lg">
                Start: <span className="text-yellow-400 font-bold">04.11.2022</span>
              </p>
            </div>
          </div>

          <div className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative transition-transform hover:scale-105 hover:shadow-xl">
            {/* Circle Effect */}
            <div className="circle absolute top-[-75px] right-[-75px] h-32 w-32  bg-purple-500 rounded-full transition-transform duration-500 group-hover:scale-[9]"></div>
            <div className="relative z-10 m-6">
              <h2 className="text-white font-bold text-2xl mb-4">
                <span className=' text-pink-500'>DSA</span>:organise & manipulate data efficiently to solve problems
              </h2>
              <p className="text-white text-lg">
                Start: <span className="text-yellow-400 font-bold">04.11.2022</span>
              </p>
            </div>
          </div>

          <div className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative transition-transform hover:scale-105 hover:shadow-xl">
            {/* Circle Effect */}
            <div className="circle absolute top-[-75px] right-[-75px] h-32 w-32 bg-pink-500 rounded-full transition-transform duration-500 group-hover:scale-[9]"></div>
            <div className="relative z-10 m-6">
              <h2 className="text-white font-bold text-2xl mb-4">
              Participating in <span className='text-purple-500'>hackathons</span> and working on various projects
              </h2>
              <p className="text-white text-lg">
                Start: <span className="text-yellow-400 font-bold">04.11.2022</span>
              </p>
            </div>
          </div>
  
          {/* Add more cards similarly */}
        </div>
      </div>
    );
  };
  
  export default Goal;
  