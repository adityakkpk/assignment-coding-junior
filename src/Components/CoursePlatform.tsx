import { RootState } from "../store/store.ts";
import { addToCart, buyNow } from "../store/courseSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import FaqCard from "./FaqComponent/FaqCard.tsx";
import questions from "./FaqComponent/questions.json";
import { useState } from "react";
import courseData from "./CourseListComponent/courseData.json";
import Lessions from "./CourseListComponent/Lessions.tsx";

const CoursePlatform: React.FC = () => {
  const course = useAppSelector((state: RootState) => state.course);
  const dispatch = useAppDispatch();

  const [isActive, setIsActive] = useState<any>(false);

  const handleButton = (id: any) => {
    setIsActive((prev: any) => (prev === id ? false : id));
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
        <aside className="hidden lg:block w-1/5 ml-5 py-5 text-gray-300">
          <div className="flex gap-1 items-center mb-7">
            {" "}
            <img src="src/assets/left.svg" className="-ml-2" />
            <p className="text-gray-300">Back to courses</p>
          </div>
          <div className="mb-7">
            <span className="text-gray-300">Course</span>
            <p className="text-xl font-semibold text-white mt-1">
              Blender 3D Fundamentals
            </p>
          </div>
          <ul className="space-y-2">
            {courseData.map((data) => (
              <Lessions
                key={data.id}
                title={data.title}
                lessions={data.lessions}
              />
            ))}
          </ul>
        </aside>

        <div className="w-full lg:w-4/5 bg-neutral-100 p-8 lg:p-6 rounded-2xl flex flex-col lg:flex-row gap-4 justify-center items-start">
          <div className="w-full lg:w-2/3">
            {/* Video Card */}
            <div className="bg-purple-900 rounded-2xl p-8 mb-4 w-full h-[35vh] lg:h-[45vh] relative flex flex-col justify-between">
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
                <div className="flex gap-2 justify-center items-center">
                  <img src="src/assets/heart.svg" className="h-5" />
                  <p className="font-semibold">{course.likes}</p>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <img src="src/assets/share.svg" className="h-5" />
                  <p className="font-semibold">Share</p>
                </div>
                <p className="font-semibold text-2xl">
                  &middot;&middot;&middot;
                </p>
              </div>
            </div>

            <div className="w-full text-black mt-10">
              {/*Description  */}
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-400 leading-7">{course.description}</p>

              {/* Course Details */}
              <h3 className="text-xl font-bold mt-8 mb-4">Course details</h3>
              <div className="w-full flex flex-wrap justify-start items-center gap-5">
                <div className="bg-white shadow-lg p-5 rounded-2xl w-40">
                  <p className="font-semibold text-gray-400">Lessons</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/sqadPlay.svg" className="h-4" />
                    {course.lessons}
                  </p>
                </div>
                <div className="bg-white shadow-lg p-5 rounded-2xl w-40">
                  <p className="font-semibold text-gray-400">Duration</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/watch.svg" className="h-4" />
                    {course.duration}
                  </p>
                </div>
                <div className="bg-white shadow-lg p-5 rounded-2xl w-40">
                  <p className="font-semibold text-gray-400">Skill level</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/chart.svg" className="h-4" />
                    {course.skillLevel}
                  </p>
                </div>
                <div className="bg-white shadow-lg p-5 rounded-2xl w-40">
                  <p className="font-semibold text-gray-400">Views</p>
                  <p className="flex gap-2 items-center justify-start text-black font-semibold">
                    <img src="src/assets/eye.svg" className="h-4" />
                    {course.views}
                  </p>
                </div>
              </div>

              <h3 className="hidden lg:block text-xl font-bold mt-8 mb-4">
                Frequently asked questions
              </h3>
              <ul className="hidden lg:block w-full p-8">
                {questions.map((faq) => (
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

          <div className="w-full lg:w-1/3 flex flex-col gap-10 justify-between">
            {/* Price Card */}
            <div className="w-full">
              <h2 className="text-black my-5 text-xl font-bold lg:hidden">
                Pricing
              </h2>
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

            {/* Ratings */}
            <div className="text-black w-full bg-white shadow-lg p-5 rounded-2xl flex justify-between items-center">
              <div className="flex gap-2 justify-center items-center">
                <p className="text-5xl">🤩</p>
                <div>
                  <p className="font-semibold mb-1 text-xl">Rating</p>
                  <p className="text-gray-400">{course.students} Students</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex gap-1 mb-1">
                  <img src="src/assets/star.svg" className="w-5" />
                  <img src="src/assets/star.svg" className="w-5" />
                  <img src="src/assets/star.svg" className="w-5" />
                  <img src="src/assets/star.svg" className="w-5" />
                  <img src="src/assets/halfStar.svg" className="w-5" />
                </div>
                <p className="font-semibold text-gray-400">
                  {course.rating} Stars{" "}
                </p>
              </div>
            </div>

            {/* Publisher */}
            <div className="text-black w-full bg-white shadow-lg p-5 rounded-2xl flex flex-col justify-between items-start">
              <h2 className="font-semibold text-xl mb-5">Publisher</h2>
              <div className="flex gap-2 justify-center items-center">
                <div className="flex items-center justify-center bg-black text-white rounded-full h-10 w-10 font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold">{course.publisher.name}</p>
                  <p className="text-gray-400">3D Artist</p>
                </div>
              </div>
              <p className="text-gray-400 mt-2">
                {course.publisher.description}
              </p>
              <p className="flex items-center gap-2 text-gray-400 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="rgb(156 163 175)"
                  stroke="rgb(156 163 175)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>{course.rating} Instructor Rating</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="rgb(156 163 175)"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-badge-check"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>{course.publisher.reviews} Reviews</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="rgb(156 163 175)"
                  stroke="rgb(156 163 175)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>{course.publisher.students} Students</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="rgb(156 163 175)"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-play"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 8 6 4-6 4Z" />
                </svg>
                <span>{course.publisher.courses} Courses</span>
              </p>
            </div>

            {/* Suggested Courses */}
            <div className="text-black w-full bg-white shadow-lg p-5 rounded-2xl flex flex-col justify-between items-start">
              <h2 className="font-semibold text-xl mb-5">Suggested courses</h2>
              <div className="flex gap-3 mb-4">
                <img
                  src="src/assets/thumbnail.jpeg"
                  className="rounded-xl w-[160px] h-[90px]"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">Excel Course</p>
                  <p className="text-gray-400">By Julia</p>
                  <p className="flex gap-2">
                    <img src="src/assets/star.svg" className="w-5" />
                    <span className="text-gray-400">{course.rating}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <img
                  src="src/assets/thumbnail.jpeg"
                  className="rounded-xl w-[160px] h-[90px]"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">Excel Course</p>
                  <p className="text-gray-400">By Julia</p>
                  <p className="flex gap-2">
                    <img src="src/assets/star.svg" className="w-5" />
                    <span className="text-gray-400">{course.rating}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <img
                  src="src/assets/thumbnail.jpeg"
                  className="rounded-xl w-[160px] h-[90px]"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">Excel Course</p>
                  <p className="text-gray-400">By Julia</p>
                  <p className="flex gap-2">
                    <img src="src/assets/star.svg" className="w-5" />
                    <span className="text-gray-400">{course.rating}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <img
                  src="src/assets/thumbnail.jpeg"
                  className="rounded-xl w-[160px] h-[90px]"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg">Excel Course</p>
                  <p className="text-gray-400">By Julia</p>
                  <p className="flex gap-2">
                    <img src="src/assets/star.svg" className="w-5" />
                    <span className="text-gray-400">{course.rating}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePlatform;
