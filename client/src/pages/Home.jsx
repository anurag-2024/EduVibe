import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularCourses from "../components/PopularCourses";
import WhyLearn from "../components/WhyLearn";
import Feature from "../components/Feature";
import Reviews from "../components/Reviews";
import Instructor from "../components/Instructor";
import Events from "../components/Events";
import BecomeInstructor from "../components/BecomeInstructor";
import Newsletter from "../components/Newsletter";
const Home = () => {
    return (
        <div className="home">
            <Hero />
            <Categories/>
            <PopularCourses/>
            <WhyLearn/>
            <Feature/>
            <Reviews/>
            <Instructor/>
            <Events/>   
            <BecomeInstructor/>
            <Newsletter/>
        </div>
    );
}
export default Home;    