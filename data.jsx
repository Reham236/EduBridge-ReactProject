import {CiMap} from "react-icons/ci"
import {FaImages,FaCreditCard} from "react-icons/fa"
export const cardData=[
    {
        id:1,
        img:<CiMap/>,
        title:"Book Library",
        desc:"Explore our extensive collection of books and resources to enhance your learning experience.",
        color:"#E74040",
        bgColor:"#FFDCD1"



    },
      {
        id:2,
        img:<FaImages/>,
        title:"Market Analysis",
        desc:"Explore our extensive collection of books and resources to enhance your learning experience.",
        color:"#2DC071",
        bgColor:"#B9EAAB"



    },
       {
        id:3,
        img:<FaCreditCard/>,
        title:"50+ Courses",
        desc:"Explore our extensive collection of books and resources to enhance your learning experience.",
        color:"#23A6F0",
        bgColor:"#B2E3FF"



    },
]
export const courseData=[
    { 
        id:1,
        img:"https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        department:"Web Development",
        title:"HTML & CSS",
        rating:4.9,
        desc:"Learn the fundamentals of web development, including HTML, CSS, and JavaScript, to build responsive and interactive websites.",
        sales:"288",
        price:"$10.99",
        discount:"$8.99",
        duraion:"16hr 40min",
        lessons:"107 Lessons"

    },
        { 
        id:2,
        img:"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        department:"Graphic Design",
        title:"UI & Ux Design",
        rating:4.7,
        desc:"Learn the fundamentals of graphic design, including UI and UX principles, to create visually appealing and user-friendly interfaces.",
        sales:"80",
        price:"$11.99",
        discount:"$4.99",
        duraion:"22hr 30min",
        lessons:"64 Lessons"

    },
        { 
        id:3,
        img:"https://images.pexels.com/photos/4977444/pexels-photo-4977444.jpeg",
        department:"Software Development",
        title:"Project Design",
        rating:4.6,
        desc:"Transform ideas into actionable project plans, ensuring successful execution and delivery of software solutions.",
        sales:"160",
        price:"$15.99",
        discount:"$7.99",
        duraion:"30hr 30min",
        lessons:"121 Lessons"

    }
]
export const reviewData=[
    {
        id:1,
        stars:"★ ★ ★ ★ ★ ",
        img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"John Doe",
        feedback:"EduBridge has transformed my learning experience. The courses are well-structured and the instructors are knowledgeable. Highly recommended!",   
        job:"Software Engineer"
    },{
        id:2,
        stars:"★ ★ ★ ★ ☆",
        img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Jane Smith",
        feedback:"I've taken several courses from EduBridge, and they've all been excellent. The instructors are knowledgeable and the content is always up-to-date.",
        job:"Graphic Designer"
    },{
        id:3,   
        stars:"★ ★ ★ ★ ☆",
        img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Michael Johnson",
        feedback:"EduBridge has a great selection of courses and the instructors are top-notch. I've learned so much and have been able to apply it to my work.",
        job:"Project Manager"
    }
]