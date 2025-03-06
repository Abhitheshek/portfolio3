import { useEffect } from "react";
import { Typewriter } from "typewriter-effect/dist/core";






export default function Heropage() {
  

    

  return (
    <div className=" overflow-x-hidden relative bg-white">
      

      <main>
      
        
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center">
          <div className="px-4 sm:px-8">
          <div className='w-full h-full p-36 '>
          <span className="text-orange-500 font-extrabold  md:inline-block text-4xl sm:text-3xl" id="typed">
          Scroll the Laptop screen
           </span>
        </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
              <span className="block">Hello everyone my self</span>
              <span className="block text-orange-600">Abhishek Yadav</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              I'm from Bhadila Doyam, Mahen Deoria, UP, a small town that fuels my big dreams. 🚀
              Exploring new things and diving into the latest tech innovations is what keeps me inspired. 💡

              When I’m not geeking out over tech, you'll probably find me singing my heart out—it’s my happy place! 🎤✨

              Let’s connect and create something amazing together! 🌈
            </p>
            <div className="mt-10 flex justify-center gap-3">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="rounded-md shadow">
                <a
                  href="https://www.instagram.com/quantumabhishek?igsh=MXRpOHVndWJibWh3eA=="
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:text-lg"
                >
                  Insta ID
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96">
          <img
            className="absolute object-top inset-0 w-full min-h-screen object-cover"
            src="/my pic2.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
