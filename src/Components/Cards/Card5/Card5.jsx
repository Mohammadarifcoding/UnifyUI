import React from 'react';

const Card5 = () => {

    return (
      <div className=" flex  flex-col md:flex-row  my-20">
        <div className="relative max-w-[350px] group">
          <img
            className="  rounded-lg transform scale-105"
            src="https://source.unsplash.com/350x350/?men"
            alt=""
          />

          <span className=" group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff]  absolute  -bottom-6 left-1/2 transform -translate-x-1/2  rounded-full w-[40px] h-[40px] bg-white">
            <svg
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="style=linear">
                  {" "}
                  <g id="add">
                    {" "}
                    <path
                      id="vector"
                      d="M11.998 5.84424L11.998 18.1604"
                      stroke="#9EE6FD"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      id="vector_2"
                      d="M18.1561 12.002L5.83998 12.0019"
                      stroke="#9EE6FD"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
          <span className="bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute  -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[50px] group-hover:h-[50px]"></span>
          <span className="bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500  absolute  -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span>
          <span className="absolute top-4 right-2 py-1 px-4 bg-[#0d87f8] z-20 text-sm  text-white rounded-full shadow-[0px_0px_5px_0px_#0d87f8]">
            pro
          </span>
          <span className="absolute top-3 left-0   z-20 text-sm  text-white rounded-full">
            <svg
              width={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Menu_Alt_03">
                  {" "}
                  <path
                    id="Vector"
                    d="M5 17H13M5 12H19M5 7H13"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </span>
        </div>
        <div className=" space-y-12 max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
          <div className="space-y-1">
            <h2 className="text-3xl font-medium text-gray-700 text-center font-sans">
              Dima Bolver
            </h2>
            <p className="font-sans  text-gray-500">@dimablover</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-gray-500 text-sm  font-sans">Shots</p>
              <p className="text-3xl tracking-wider text-gray-700">23</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 text-sm font-sans">Following</p>
              <p className="text-3xl tracking-wider text-gray-700">314</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-500 text-sm font-sans">Followers</p>
              <p className="text-3xl tracking-wider text-gray-700">487</p>
            </div>
          </div>
          <div>
            <button className="text-sm font-bold  bg-[#0d87f8] font-sans text-white py-3 px-6 rounded-full">
              {" "}
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Card5;