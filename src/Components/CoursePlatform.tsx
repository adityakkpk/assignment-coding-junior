import { RootState } from "../store/store.ts";
import { addToCart, buyNow } from "../store/courseSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import FaqCard from "./FaqComponent/FaqCard.jsx";
import questions from "./FaqComponent/questions.json";
import { useState } from "react";

const CoursePlatform: React.FC = () => {
  const course = useAppSelector((state: RootState) => state.course);
  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState<any>(false);

  const handleButton = (id: any) => {
    setIsActive((prev) => (prev === id ? false : id));
  };

  return (
    <div className="bg-neutral-950 text-white">
      <nav className="flex justify-between items-center p-4 bg-neutral-950">
        <div className="text-xl font-bold flex gap-2 justify-center items-center">
          <img src="src/assets/menu.svg" alt="" />
          <p>Quantum</p>
        </div>
        <div className="flex space-x-4">
          <button className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
          <button className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
      </nav>

      <main className="flex gap-5 justify-between">
        {/* Side Menu */}
        <aside className="w-1/5">
          <h2 className="text-xl font-bold mb-4">Course</h2>
          <ul className="space-y-2">
            <li>Course Introduction</li>
            <li>Basics of Blender 3D</li>
            <li>Mesh Modeling</li>
            <li>Mesh Editing Operations</li>
            <li>Most Common Modifiers</li>
            <li>Orthographic References</li>
            <li>Sculpting</li>
          </ul>
        </aside>

        <div className="w-4/5 bg-neutral-100 p-6 rounded-2xl flex gap-4 justify-center items-start">
          <div className="w-2/3">
            {/* Video Card */}
            <div className="bg-purple-900 rounded-2xl p-8 mb-4 w-full h-[45vh] relative flex flex-col justify-between">
              <div className="w-1/2">
                <h1 className="text-3xl font-bold tracking-wide mb-2">
                  BLENDER 3D FUNDAMENTALS
                </h1>
                <p className="mb-4 text-sm tracking-wider">
                  Learn The Basics of 3D in Blender with a Project Based
                  Approach
                </p>
              </div>
              <p className="font-bold">INTRODUCTION</p>
              <button className="bg-gray-900/60 rounded-full p-3 absolute top-[44%] right-[46%] flex justify-center items-center">
                <img src="src/assets/playVid.svg" className="w-3 md:w-5" />
              </button>
            </div>

            {/*Profile and Stats  */}
            <div className="text-black flex justify-between items-center">
              <div className="flex gap-2 justify-center items-center">
                <div className="flex items-center justify-center bg-black text-white rounded-full h-10 w-10 font-bold">
                  R
                </div>
                <div>
                  <p className="font-bold">{course.publisher.name}</p>
                  <p className="text-gray-400">Publisher</p>
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <p className="flex gap-2 justify-center items-center">
                  <img src="src/assets/heart.svg" className="h-5" />
                  <p className="font-semibold">{course.likes}</p>
                </p>
                <p className="flex gap-2 justify-center items-center">
                  <img src="src/assets/share.svg" className="h-5" />
                  <p className="font-semibold">Share</p>
                </p>
                <p className="font-semibold text-2xl">
                  &middot;&middot;&middot;
                </p>
              </div>
            </div>

            {/*Description  */}
            <div className="w-full text-black mt-10">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-400 leading-7">{course.description}</p>

              <h3 className="text-xl font-bold mt-8 mb-4">Course details</h3>
              <div className="flex space-x-8">
                <div className="bg-white shadow-lg p-5 rounded-2xl w-48">
                  <p className="font-semibold text-gray-400">Lessons</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/sqadPlay.svg" className="h-4" />
                    {course.lessons}
                  </p>
                </div>
                <div className="bg-white shadow-lg p-5 rounded-2xl w-48">
                  <p className="font-semibold text-gray-400">Duration</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/watch.svg" className="h-4" />
                    {course.duration}
                  </p>
                </div>
                <div className="bg-white shadow-lg p-5 rounded-2xl w-48">
                  <p className="font-semibold text-gray-400">Skill level</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/chart.svg" className="h-4" />
                    {course.skillLevel}
                  </p>
                </div>
                <div className="bg-white shadow-lg p-5 rounded-2xl w-48">
                  <p className="font-semibold text-gray-400">Views</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/eye.svg" className="h-4" />
                    {course.views}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-8 mb-4">
                Frequently asked questions
              </h3>
              <ul className="w-full p-8">
                {questions.map((faq, i) => (
                  <FaqCard
                    key={faq.id}
                    data={faq}
                    isActive={isActive === faq.id}
                    onToggle={() => handleButton(faq.id)}
                  />
                ))}
              </ul>
            </div>
          </div>

          {/* Price Card */}
          <div className="w-1/3 flex justify-between">
            <div className="w-full">
              <div className="bg-white shadow-xl text-black p-6 rounded-xl">
                <p className="text-gray-400 text-xs mb-2 font-semibold">
                  Full Course
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <h3 className="text-2xl font-bold">${course.price}</h3>
                    <span className="text-gray-400 line-through">
                      ${course.originalPrice}
                    </span>
                  </div>

                  <div className="text-indigo-600 font-semibold bg-indigo-200/55 px-2 py-1 rounded-lg">
                    {course.discount}%
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Course includes:</p>
                  <ul className="mb-6 flex flex-col gap-2">
                    <li className="flex gap-2 text-gray-500">
                      <img src={"src/assets/play.svg"} className="w-4" />
                      <p>{course.videoHours} hours on-demand video</p>
                    </li>
                    <li className="flex gap-2 text-gray-500">
                      <img src="src/assets/article.svg" className="w-4" />
                      <p>{course.articles} Articles</p>
                    </li>
                    <li className="flex gap-2 text-gray-500">
                      <img src="src/assets/folder.svg" className="w-4" />
                      <p>{course.resources} Downloadable resources</p>
                    </li>
                    <li className="flex gap-2 text-gray-500">
                      <img src="src/assets/pad.svg" className="w-4" />
                      <p>Mobile version</p>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => dispatch(addToCart())}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg mb-2"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => dispatch(buyNow())}
                  className="w-full border border-indigo-600 bg-white text-indigo-600 py-2 rounded-lg"
                >
                  Buy now
                </button>
                <p className="text-gray-400 font-semibold text-sm mt-4">
                  30-Day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePlatform;
