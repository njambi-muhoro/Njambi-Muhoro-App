import React from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="px-0 sm:px-24 pt-2  flex flex-col gap-4">
      <div className=" flex justify-between text-sky-500 font-bold text-3xl border-b border-dotted flex-wrap sm:flex-nowrap">
        <h1 id="textName">Portfolio</h1>
        <div className="py-2">
          <BsFillJournalBookmarkFill />
        </div>
      </div>

      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="	https://victormatara.com/wp-content/uploads/2018/03/Webp.net-compress-image-14.jpg"
            alt=""
          />
        </a>

        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-white">
              FREESHI VEGGIES LTD
            </h5>
          </a>
          <p class="mb-3 font-normal text-white dark:text-white-400 italic">
            Shop the freshest, best quality food, that is good for you and good
            for the planet. Shop Kenya's best quality products on Freeshi Veggies
            with same day delivery
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Work In Progress
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
