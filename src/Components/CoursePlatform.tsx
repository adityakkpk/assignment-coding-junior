import { RootState } from "../store/store.ts";
import { addToCart, buyNow } from "../store/courseSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";

const CoursePlatform: React.FC = () => {
  const course = useAppSelector((state: RootState) => state.course);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-neutral-950">
        <div className="text-xl font-bold">Quantum</div>
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

      <main className="flex h-lvh gap-5 justify-between">
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
            <div className="bg-purple-900 rounded-lg p-8 mb-4 w-full h-[45vh] relative">
              <h1 className="text-3xl font-bold mb-4 w-1/2">
                Blender 3D Fundamentals
              </h1>
              <p className="mb-4 w-1/2">
                Learn The Basics of 3D in Blender with a Project Based Approach
              </p>
              <button className="bg-gray-900/60 rounded-full p-2 absolute top-[44%] right-[46%]">
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

           {/*Profile and Stats  */}
           <div></div>

           {/*Description  */}
            <div className="w-full text-black">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p>{course.description}</p>

              <h3 className="text-xl font-bold mt-8 mb-4">Course details</h3>
              <div className="flex space-x-8">
                <div>
                  <p className="font-bold">Lessons</p>
                  <p>{course.lessons}</p>
                </div>
                <div>
                  <p className="font-bold">Duration</p>
                  <p>{course.duration}</p>
                </div>
                <div>
                  <p className="font-bold">Skill level</p>
                  <p>{course.skillLevel}</p>
                </div>
                <div>
                  <p className="font-bold">Views</p>
                  <p>{course.views}</p>
                </div>
              </div>
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
                <p className="text-gray-400 font-semibold text-sm mt-4">30-Day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePlatform;
