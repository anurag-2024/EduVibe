import image1 from '../assets/relatedCourses/relatedcourse-1.jpg'
import image2 from '../assets/relatedCourses/relatedcourse-2.webp'
import image3 from '../assets/relatedCourses/relatedcourse-3.jpg'
import image4 from '../assets/relatedCourses/relatedcourse-4.jpg'
import image5 from '../assets/relatedCourses/relatedcourse-5.jpg'
import image6 from '../assets/relatedCourses/relatedcourse-6.jpg'
import tutorImg1 from '../assets/courses/tutor-1.jpg'
import tutorImg2 from '../assets/courses/tutor-2.jpg'
import tutorImg3 from '../assets/courses/tutor-3.jpg'
import tutorImg4 from '../assets/courses/tutor-4.jpg'
import tutorImg5 from '../assets/courses/tutor-5.jpg'
import tutorImg6 from '../assets/courses/tutor-6.jpg'

const relatedCourses = [
    {
        id: 1,
        title: "Introduction to Python",
        category: "Development",
        image: image1, 
        tutor: "Alice Johnson",
        tutorImg: tutorImg1, 
        pricebefore: 4500,
        priceafter: 3000,
        rating: 4.7,
        noOfStudents: 600,
        lessons: 25,
        duration: 10
    },
    {
        id: 2,
        title: "Mastering Photoshop",
        category: "Design",
        image: image2,
        tutor: "Robert Brown",
        tutorImg: tutorImg2, 
        pricebefore: 5000,
        priceafter: 3500,
        rating: 4.8,
        noOfStudents: 700,
        lessons: 30,
        duration: 12
    },
    {
        id: 3,
        title: "Data Science with R",
        category: "IT & Software",
        image: image3, 
        tutor: "Maria Garcia",
        tutorImg: tutorImg3, 
        pricebefore: 6000,
        priceafter: 4000,
        rating: 4.9,
        noOfStudents: 800,
        lessons: 40,
        duration: 15
    },
    {
        id: 4,
        title: "Business Analytics",
        category: "Business",
        image: image4, 
        tutor: "James Smith",
        tutorImg: tutorImg4, 
        pricebefore: 7000,
        priceafter: 5000,
        rating: 4.6,
        noOfStudents: 900,
        lessons: 20,
        duration: 18
    },
    {
        id: 5,
        title: "Digital Photography",
        category: "Photography",
        image: image5,
        tutor: "Patricia Taylor",
        tutorImg: tutorImg5, 
        pricebefore: 5500,
        priceafter: 3200,
        rating: 4.7,
        noOfStudents: 300,
        lessons: 18,
        duration: 8
    },
    {
        id: 6,
        title: "Web Development Bootcamp",
        category: "Development",
        image: image6, 
        tutor: "Michael Williams",
        tutorImg: tutorImg6, 
        pricebefore: 8000,
        priceafter: 6000,
        rating: 4.9,
        noOfStudents: 1200,
        lessons: 50,
        duration: 20
    }
];

export default relatedCourses;
