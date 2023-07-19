import React from 'react'

const Education = () => {
  return (
    <div>
         <div className="flex flex-col gap-8">
        <div className="experience__content leading-loose">
          <div className="experience__time  ">
            <span className="experience__rounder"></span>

            <span className="experience__line h-[90%] sm:h-[70%]"></span>

            <span className="experience__rounder "></span>
          </div>
          <div className="experience__data bd-grid ">
            <h3 className="experience__title text-white lie">
            SOFTWARE DEVELOPMENT
            </h3>
            <span className="experience__company text-white">
              <div className="text-white ">
                
                <p className="text-white text-sm">November 2022-May 2023 </p>
              </div>
            </span>
            <h2 className="text-white text-md">
              {" "}
              Moringa School
            </h2>
            <h3 className="text-sky-500 text-sm">
                   Ngong Road, Nairobi
                </h3>
          </div>
        </div>

        <div>
        <div className="experience__content leading-loose">
          <div className="experience__time   ">
            <span className="experience__rounder"></span>

            <span className="experience__line h-[90%] sm:h-[70%]"></span>

            <span className="experience__rounder "></span>
          </div>
          <div className="experience__data bd-grid  ">
            <h3 className="experience__title text-white lie">
            Bachelor Of Commerce
            </h3>
            <span className="experience__company text-white">
              <div className="text-white ">
                
                <p className="text-white text-sm">May 2016-December 2020 </p>
              </div>
            </span> 
            <h2 className="text-white text-md">
              {" "}
              Jomo Kenyatta University of Agriculture And Technology 
            </h2>
            <h3 className="text-sky-500 text-sm">
                   Juja, Nairobi
                </h3>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Education