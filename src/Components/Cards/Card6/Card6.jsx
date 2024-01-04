
import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card6 = () => {

    const codeStr = `
    export const Card6 = () => {
  return (<div className="max-w-[350px] font-sans border shadow-lg rounded-lg mx-auto">
        <div className="px-4 py-4 flex gap-10 justify-between items-center">
          {/* Avatar image  */}
          <div className="flex gap-3 items-center">
            <img
              className="w-16 h-16 rounded-full bg-black/40"
              src="https://source.unsplash.com/100x100/?portrait"
              alt="portrait"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Yoan Lee</h2>
              <p className="text-gray-400">2 days ago</p>
            </div>
          </div>

          {/* Setting button */}
          <div className="flex flex-col gap-1 cursor-pointer px-4 py-3 rounded-full  hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* Post Image */}
        <div className="flex flex-col gap-1">
          <div className="w-full">
            <img
              className="w-full h-[150px] bg-black/40"
              src="https://source.unsplash.com/400x200/?arts"
              alt=""
            />
          </div>
          <div className="flex gap-1 overflow-hidden">
            <img
              className="w-[49.5%] h-[150px] bg-black/40"
              src="https://source.unsplash.com/201x201/?arts"
              alt=""
            />
            <img
              className="w-[49.5%] h-[150px]  bg-black/40"
              src="https://source.unsplash.com/202x202/?arts"
              alt=""
            />
          </div>
        </div>

        {/* Post content */}
        <div className="mt-2 px-4">
          <h2 className=" text-xl font-semibold">My new paintings</h2>
          <h2 className="py-1  text-sm ">
            Hey, I captured some picture recently. You can check it and share
            you thoughts with me. I want to listen your thoughts...{" "}
            <span className="text-[#3e96d4] cursor-pointer">See more</span>
          </h2>
        </div>

        {/* icons */}
        <div className="mt-2 px-4  flex  justify-between pb-4">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.9023 3.75065 14.9662 3.85585 13.0725 5.51217L14.5302 6.9694C14.8232 7.26224 14.8233 7.73711 14.5304 8.03006C14.2376 8.323 13.7627 8.32309 13.4698 8.03025L11.4698 6.03097L11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <h2 className="text-lg font-semibold">10k</h2>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M4.47471 13.9757C5.34981 13.9707 6.19148 13.639 6.83471 13.0457L13.0947 16.6257C13.015 16.902 12.9746 17.1881 12.9747 17.4757C12.9683 18.2872 13.2417 19.0762 13.7489 19.7097C14.2561 20.3433 14.9661 20.7827 15.7594 20.9541C16.5527 21.1254 17.3807 21.0181 18.1042 20.6504C18.8277 20.2826 19.4023 19.6768 19.7314 18.935C20.0605 18.1931 20.1239 17.3605 19.9109 16.5774C19.698 15.7942 19.2217 15.1084 18.5622 14.6353C17.9028 14.1623 17.1005 13.9309 16.2904 13.9801C15.4804 14.0294 14.712 14.3562 14.1147 14.9057L7.85471 11.3257C7.93026 11.0792 7.97066 10.8234 7.97471 10.5657L14.1247 7.04567C14.7188 7.58251 15.4794 7.89875 16.2789 7.94137C17.0785 7.98398 17.8684 7.75037 18.5161 7.27972C19.1639 6.80906 19.6301 6.12999 19.8366 5.35639C20.0431 4.58278 19.9773 3.7617 19.6503 3.03084C19.3232 2.29999 18.7548 1.70381 18.0404 1.34229C17.326 0.98078 16.509 0.875916 15.7264 1.04529C14.9438 1.21467 14.2433 1.64798 13.7423 2.27256C13.2413 2.89713 12.9703 3.67499 12.9747 4.47567C12.9781 4.76297 13.0184 5.04865 13.0947 5.32567L7.40471 8.57567C7.07502 8.06562 6.61828 7.65014 6.0794 7.37007C5.54051 7.09 4.93801 6.95497 4.33114 6.97825C3.72426 7.00154 3.13389 7.18234 2.61804 7.50288C2.1022 7.82342 1.67864 8.27268 1.389 8.80649C1.09936 9.34029 0.95361 9.94028 0.966069 10.5475C0.978527 11.1547 1.14877 11.7482 1.46006 12.2697C1.77135 12.7911 2.21298 13.2226 2.74154 13.5217C3.2701 13.8209 3.86739 13.9773 4.47471 13.9757ZM16.4747 15.9757C16.7714 15.9757 17.0614 16.0636 17.3081 16.2285C17.5547 16.3933 17.747 16.6276 17.8605 16.9016C17.9741 17.1757 18.0038 17.4773 17.9459 17.7683C17.888 18.0593 17.7451 18.3265 17.5354 18.5363C17.3256 18.7461 17.0583 18.889 16.7673 18.9468C16.4764 19.0047 16.1748 18.975 15.9007 18.8615C15.6266 18.748 15.3923 18.5557 15.2275 18.309C15.0627 18.0623 14.9747 17.7723 14.9747 17.4757C14.9747 17.0778 15.1327 16.6963 15.4141 16.415C15.6954 16.1337 16.0769 15.9757 16.4747 15.9757ZM16.4747 2.97567C16.7714 2.97567 17.0614 3.06364 17.3081 3.22846C17.5547 3.39328 17.747 3.62755 17.8605 3.90164C17.9741 4.17573 18.0038 4.47733 17.9459 4.7683C17.888 5.05927 17.7451 5.32655 17.5354 5.53633C17.3256 5.74611 17.0583 5.88897 16.7673 5.94684C16.4764 6.00472 16.1748 5.97502 15.9007 5.86149C15.6266 5.74795 15.3923 5.5557 15.2275 5.30902C15.0627 5.06235 14.9747 4.77234 14.9747 4.47567C14.9747 4.07784 15.1327 3.69631 15.4141 3.41501C15.6954 3.1337 16.0769 2.97567 16.4747 2.97567ZM4.47471 8.97567C4.77138 8.97567 5.06139 9.06364 5.30807 9.22846C5.55474 9.39328 5.747 9.62755 5.86053 9.90164C5.97406 10.1757 6.00377 10.4773 5.94589 10.7683C5.88801 11.0593 5.74515 11.3265 5.53537 11.5363C5.32559 11.7461 5.05832 11.889 4.76735 11.9468C4.47638 12.0047 4.17478 11.975 3.90069 11.8615C3.6266 11.748 3.39233 11.5557 3.22751 11.309C3.06269 11.0623 2.97471 10.7723 2.97471 10.4757C2.97471 10.0778 3.13275 9.69631 3.41405 9.41501C3.69536 9.1337 4.07689 8.97567 4.47471 8.97567Z"
                fill="black"
              />
            </svg>
            <h2 className="text-lg font-semibold">34</h2>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.92859 10C8.92859 10.2842 9.04147 10.5567 9.2424 10.7576C9.44333 10.9585 9.71585 11.0714 10 11.0714C10.2842 11.0714 10.5567 10.9585 10.7576 10.7576C10.9585 10.5567 11.0714 10.2842 11.0714 10C11.0714 9.71584 10.9585 9.44332 10.7576 9.24239C10.5567 9.04145 10.2842 8.92857 10 8.92857C9.71585 8.92857 9.44333 9.04145 9.2424 9.24239C9.04147 9.44332 8.92859 9.71584 8.92859 10ZM13.3928 10C13.3928 10.2842 13.5057 10.5567 13.7066 10.7576C13.9076 10.9585 14.1801 11.0714 14.4642 11.0714C14.7484 11.0714 15.0209 10.9585 15.2218 10.7576C15.4228 10.5567 15.5356 10.2842 15.5356 10C15.5356 9.71584 15.4228 9.44332 15.2218 9.24239C15.0209 9.04145 14.7484 8.92857 14.4642 8.92857C14.1801 8.92857 13.9076 9.04145 13.7066 9.24239C13.5057 9.44332 13.3928 9.71584 13.3928 10ZM4.46436 10C4.46436 10.2842 4.57724 10.5567 4.77817 10.7576C4.9791 10.9585 5.25162 11.0714 5.53577 11.0714C5.81993 11.0714 6.09245 10.9585 6.29338 10.7576C6.49431 10.5567 6.60719 10.2842 6.60719 10C6.60719 9.71584 6.49431 9.44332 6.29338 9.24239C6.09245 9.04145 5.81993 8.92857 5.53577 8.92857C5.25162 8.92857 4.9791 9.04145 4.77817 9.24239C4.57724 9.44332 4.46436 9.71584 4.46436 10ZM19.2231 6.125C18.7186 4.92634 17.9954 3.85045 17.0736 2.92634C16.1582 2.00758 15.0714 1.27728 13.875 0.776786C12.6473 0.261161 11.3437 0 10 0H9.95536C8.6027 0.00669643 7.29245 0.274554 6.06032 0.801339C4.87408 1.30697 3.79754 2.03857 2.89072 2.95536C1.97778 3.87723 1.26127 4.94866 0.765742 6.14286C0.252356 7.37946 -0.00656971 8.6942 0.000126634 10.0469C0.00770076 11.597 0.374434 13.1243 1.07154 14.5089V17.9018C1.07154 18.1741 1.17972 18.4353 1.37228 18.6278C1.56483 18.8204 1.826 18.9286 2.09831 18.9286H5.49336C6.87793 19.6257 8.40522 19.9924 9.95536 20H10.0022C11.3393 20 12.6361 19.7411 13.8571 19.2344C15.0475 18.7398 16.1302 18.0181 17.0446 17.1094C17.9664 16.1964 18.6919 15.1295 19.1985 13.9397C19.7253 12.7076 19.9932 11.3973 19.9999 10.0446C20.0066 8.68527 19.7432 7.36607 19.2231 6.125ZM15.8504 15.9018C14.2857 17.4509 12.2098 18.3036 10 18.3036H9.96206C8.61609 18.2969 7.27905 17.9621 6.09827 17.3326L5.91077 17.2321H2.76795V14.0893L2.6675 13.9018C2.03805 12.721 1.70323 11.3839 1.69653 10.0379C1.68761 7.8125 2.53804 5.72321 4.09829 4.14955C5.65631 2.57589 7.73887 1.70536 9.96429 1.69643H10.0022C11.1183 1.69643 12.2009 1.91295 13.2209 2.34152C14.2165 2.75893 15.1093 3.35938 15.8772 4.12723C16.6428 4.89286 17.2454 5.78795 17.6629 6.78348C18.0959 7.81473 18.3124 8.90848 18.3079 10.0379C18.2945 12.2612 17.4218 14.3438 15.8504 15.9018Z"
                fill="black"
              />
            </svg>
            <h2 className="text-lg font-semibold">40</h2>
          </div>
        </div>
      </div>
   
    );
 }`


  return (
    <CodeBox codeStr={codeStr}>
      <div className="max-w-[350px] font-sans border shadow-lg rounded-lg mx-auto">
        <div className="px-4 py-4 flex gap-10 justify-between items-center">
          {/* Avatar image  */}
          <div className="flex gap-3 items-center">
            <img
              className="w-16 h-16 rounded-full bg-black/40"
              src="https://source.unsplash.com/100x100/?portrait"
              alt="portrait"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Yoan Lee</h2>
              <p className="text-gray-400">2 days ago</p>
            </div>
          </div>

          {/* Setting button */}
          <div className="flex flex-col gap-1 cursor-pointer px-4 py-3 rounded-full  hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* Post Image */}
        <div className="flex flex-col gap-1">
          <div className="w-full">
            <img
              className="w-full h-[150px] bg-black/40"
              src="https://source.unsplash.com/400x200/?arts"
              alt=""
            />
          </div>
          <div className="flex gap-1 overflow-hidden">
            <img
              className="w-[49.5%] h-[150px] bg-black/40"
              src="https://source.unsplash.com/201x201/?arts"
              alt=""
            />
            <img
              className="w-[49.5%] h-[150px]  bg-black/40"
              src="https://source.unsplash.com/202x202/?arts"
              alt=""
            />
          </div>
        </div>

        {/* Post content */}
        <div className="mt-3 px-4 p space-y-2">
          <h2 className=" text-xl font-semibold text-slate-800">
            My new paintings
          </h2>
          <h2 className=" text-sm text-gray-500">
            Hey, I captured some picture recently. You can check it and share
            you thoughts with me. I want to listen your thoughts...{" "}
            <span className="text-[#3e96d4] cursor-pointer">See more</span>
          </h2>
        </div>

        {/* icons */}
        <div className="mt-4 px-4  flex  justify-between pb-4">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.9023 3.75065 14.9662 3.85585 13.0725 5.51217L14.5302 6.9694C14.8232 7.26224 14.8233 7.73711 14.5304 8.03006C14.2376 8.323 13.7627 8.32309 13.4698 8.03025L11.4698 6.03097L11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                  fill="#1E293B"
                ></path>
              </g>
            </svg>
            <h2 className="text-lg font-semibold text-slate-800">10k</h2>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M4.47471 13.9757C5.34981 13.9707 6.19148 13.639 6.83471 13.0457L13.0947 16.6257C13.015 16.902 12.9746 17.1881 12.9747 17.4757C12.9683 18.2872 13.2417 19.0762 13.7489 19.7097C14.2561 20.3433 14.9661 20.7827 15.7594 20.9541C16.5527 21.1254 17.3807 21.0181 18.1042 20.6504C18.8277 20.2826 19.4023 19.6768 19.7314 18.935C20.0605 18.1931 20.1239 17.3605 19.9109 16.5774C19.698 15.7942 19.2217 15.1084 18.5622 14.6353C17.9028 14.1623 17.1005 13.9309 16.2904 13.9801C15.4804 14.0294 14.712 14.3562 14.1147 14.9057L7.85471 11.3257C7.93026 11.0792 7.97066 10.8234 7.97471 10.5657L14.1247 7.04567C14.7188 7.58251 15.4794 7.89875 16.2789 7.94137C17.0785 7.98398 17.8684 7.75037 18.5161 7.27972C19.1639 6.80906 19.6301 6.12999 19.8366 5.35639C20.0431 4.58278 19.9773 3.7617 19.6503 3.03084C19.3232 2.29999 18.7548 1.70381 18.0404 1.34229C17.326 0.98078 16.509 0.875916 15.7264 1.04529C14.9438 1.21467 14.2433 1.64798 13.7423 2.27256C13.2413 2.89713 12.9703 3.67499 12.9747 4.47567C12.9781 4.76297 13.0184 5.04865 13.0947 5.32567L7.40471 8.57567C7.07502 8.06562 6.61828 7.65014 6.0794 7.37007C5.54051 7.09 4.93801 6.95497 4.33114 6.97825C3.72426 7.00154 3.13389 7.18234 2.61804 7.50288C2.1022 7.82342 1.67864 8.27268 1.389 8.80649C1.09936 9.34029 0.95361 9.94028 0.966069 10.5475C0.978527 11.1547 1.14877 11.7482 1.46006 12.2697C1.77135 12.7911 2.21298 13.2226 2.74154 13.5217C3.2701 13.8209 3.86739 13.9773 4.47471 13.9757ZM16.4747 15.9757C16.7714 15.9757 17.0614 16.0636 17.3081 16.2285C17.5547 16.3933 17.747 16.6276 17.8605 16.9016C17.9741 17.1757 18.0038 17.4773 17.9459 17.7683C17.888 18.0593 17.7451 18.3265 17.5354 18.5363C17.3256 18.7461 17.0583 18.889 16.7673 18.9468C16.4764 19.0047 16.1748 18.975 15.9007 18.8615C15.6266 18.748 15.3923 18.5557 15.2275 18.309C15.0627 18.0623 14.9747 17.7723 14.9747 17.4757C14.9747 17.0778 15.1327 16.6963 15.4141 16.415C15.6954 16.1337 16.0769 15.9757 16.4747 15.9757ZM16.4747 2.97567C16.7714 2.97567 17.0614 3.06364 17.3081 3.22846C17.5547 3.39328 17.747 3.62755 17.8605 3.90164C17.9741 4.17573 18.0038 4.47733 17.9459 4.7683C17.888 5.05927 17.7451 5.32655 17.5354 5.53633C17.3256 5.74611 17.0583 5.88897 16.7673 5.94684C16.4764 6.00472 16.1748 5.97502 15.9007 5.86149C15.6266 5.74795 15.3923 5.5557 15.2275 5.30902C15.0627 5.06235 14.9747 4.77234 14.9747 4.47567C14.9747 4.07784 15.1327 3.69631 15.4141 3.41501C15.6954 3.1337 16.0769 2.97567 16.4747 2.97567ZM4.47471 8.97567C4.77138 8.97567 5.06139 9.06364 5.30807 9.22846C5.55474 9.39328 5.747 9.62755 5.86053 9.90164C5.97406 10.1757 6.00377 10.4773 5.94589 10.7683C5.88801 11.0593 5.74515 11.3265 5.53537 11.5363C5.32559 11.7461 5.05832 11.889 4.76735 11.9468C4.47638 12.0047 4.17478 11.975 3.90069 11.8615C3.6266 11.748 3.39233 11.5557 3.22751 11.309C3.06269 11.0623 2.97471 10.7723 2.97471 10.4757C2.97471 10.0778 3.13275 9.69631 3.41405 9.41501C3.69536 9.1337 4.07689 8.97567 4.47471 8.97567Z"
                fill="#1E293B"
              />
            </svg>
            <h2 className="text-lg font-semibold text-slate-800">34</h2>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.92859 10C8.92859 10.2842 9.04147 10.5567 9.2424 10.7576C9.44333 10.9585 9.71585 11.0714 10 11.0714C10.2842 11.0714 10.5567 10.9585 10.7576 10.7576C10.9585 10.5567 11.0714 10.2842 11.0714 10C11.0714 9.71584 10.9585 9.44332 10.7576 9.24239C10.5567 9.04145 10.2842 8.92857 10 8.92857C9.71585 8.92857 9.44333 9.04145 9.2424 9.24239C9.04147 9.44332 8.92859 9.71584 8.92859 10ZM13.3928 10C13.3928 10.2842 13.5057 10.5567 13.7066 10.7576C13.9076 10.9585 14.1801 11.0714 14.4642 11.0714C14.7484 11.0714 15.0209 10.9585 15.2218 10.7576C15.4228 10.5567 15.5356 10.2842 15.5356 10C15.5356 9.71584 15.4228 9.44332 15.2218 9.24239C15.0209 9.04145 14.7484 8.92857 14.4642 8.92857C14.1801 8.92857 13.9076 9.04145 13.7066 9.24239C13.5057 9.44332 13.3928 9.71584 13.3928 10ZM4.46436 10C4.46436 10.2842 4.57724 10.5567 4.77817 10.7576C4.9791 10.9585 5.25162 11.0714 5.53577 11.0714C5.81993 11.0714 6.09245 10.9585 6.29338 10.7576C6.49431 10.5567 6.60719 10.2842 6.60719 10C6.60719 9.71584 6.49431 9.44332 6.29338 9.24239C6.09245 9.04145 5.81993 8.92857 5.53577 8.92857C5.25162 8.92857 4.9791 9.04145 4.77817 9.24239C4.57724 9.44332 4.46436 9.71584 4.46436 10ZM19.2231 6.125C18.7186 4.92634 17.9954 3.85045 17.0736 2.92634C16.1582 2.00758 15.0714 1.27728 13.875 0.776786C12.6473 0.261161 11.3437 0 10 0H9.95536C8.6027 0.00669643 7.29245 0.274554 6.06032 0.801339C4.87408 1.30697 3.79754 2.03857 2.89072 2.95536C1.97778 3.87723 1.26127 4.94866 0.765742 6.14286C0.252356 7.37946 -0.00656971 8.6942 0.000126634 10.0469C0.00770076 11.597 0.374434 13.1243 1.07154 14.5089V17.9018C1.07154 18.1741 1.17972 18.4353 1.37228 18.6278C1.56483 18.8204 1.826 18.9286 2.09831 18.9286H5.49336C6.87793 19.6257 8.40522 19.9924 9.95536 20H10.0022C11.3393 20 12.6361 19.7411 13.8571 19.2344C15.0475 18.7398 16.1302 18.0181 17.0446 17.1094C17.9664 16.1964 18.6919 15.1295 19.1985 13.9397C19.7253 12.7076 19.9932 11.3973 19.9999 10.0446C20.0066 8.68527 19.7432 7.36607 19.2231 6.125ZM15.8504 15.9018C14.2857 17.4509 12.2098 18.3036 10 18.3036H9.96206C8.61609 18.2969 7.27905 17.9621 6.09827 17.3326L5.91077 17.2321H2.76795V14.0893L2.6675 13.9018C2.03805 12.721 1.70323 11.3839 1.69653 10.0379C1.68761 7.8125 2.53804 5.72321 4.09829 4.14955C5.65631 2.57589 7.73887 1.70536 9.96429 1.69643H10.0022C11.1183 1.69643 12.2009 1.91295 13.2209 2.34152C14.2165 2.75893 15.1093 3.35938 15.8772 4.12723C16.6428 4.89286 17.2454 5.78795 17.6629 6.78348C18.0959 7.81473 18.3124 8.90848 18.3079 10.0379C18.2945 12.2612 17.4218 14.3438 15.8504 15.9018Z"
                fill="#1E293B"
              />
            </svg>
            <h2 className="text-lg font-semibold text-slate-800">40</h2>
          </div>
        </div>
      </div>
    </CodeBox>
  );
};

export default Card6;
