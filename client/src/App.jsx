import React from "react"
import './App.scss'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import SearchCourses from "./pages/SearchCourses"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import CourseDetails from "./pages/CourseDetails"
import Instructor from "./pages/Instructor"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-courses" element={<SearchCourses />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/course-detail/:id" element={<CourseDetails />} />
        <Route path="/become-instructor" element={<Instructor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
