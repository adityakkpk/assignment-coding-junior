import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseState {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  lessons: number;
  duration: string;
  skillLevel: string;
  views: number;
  videoHours: number;
  articles: number;
  resources: number;
  rating: number;
  students: number;
  likes: number;
  publisher: {
    name: string;
    title: string;
    description: string;
    rating: number;
    reviews: number;
    students: number;
    courses: number;
  };
  inCart: boolean;
}

const initialState: CourseState = {
  id: '1',
  title: 'Blender 3D Fundamentals',
  description: 'Welcome to the exciting world of Blender 3D! In this comprehensive course, we will dive into the fundamentals of Blender, equipping you with the essential knowledge and skills to create stunning 3D projects. Whether you\'re a beginner eager to explore the realm of 3D modeling or an experienced artist looking to expand your capabilities, this course will guide you every step of the way.',
  price: 15.99,
  originalPrice: 39.99,
  discount: 60,
  lessons: 128,
  duration: '56h 28m',
  skillLevel: 'Beginner',
  views: 12620,
  videoHours: 56,
  articles: 6,
  resources: 8,
  rating: 4.8,
  students: 2493,
  likes: 982,
  publisher: {
    name: 'Ryan Curtis',
    title: '3D Artist',
    description: 'Hey! My name is Ryan. I\'m 26 and a freelance 3D Artist with around 8 years of experience.',
    rating: 4.8,
    reviews: 889,
    students: 4887,
    courses: 6,
  },
  inCart: false,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.inCart = true;
    },
    removeFromCart: (state) => {
      state.inCart = false;
    },
    buyNow: (state) => {
      state.inCart = true;
    },
    updateCourseDetails: (state, action: PayloadAction<Partial<CourseState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addToCart, removeFromCart, buyNow, updateCourseDetails } = courseSlice.actions;

export default courseSlice.reducer;