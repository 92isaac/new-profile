import movies from "../assets/fresh.png";
import hernalytic from "../assets/hernalytic.png";
import ecommerce from "../assets/e-commerce.png";
import lasop from "../assets/lasop.png";
import home from "../assets/home.png";
import url from "../assets/url.png";

export const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/Isaac Oluwatobi Sangodare 2023..pdf",
    text: "Resume",
    anchor: true,
  },
];

export const tools = [
  { language: "HTML", completed: "95" },
  { language: "CSS", completed: "90" },
  { language: "TAILWIND", completed: "85" },
  { language: "JAVASCRIPT", completed: "90" },
  { language: "TYPESCRIPT", completed: "85" },
  { language: "REACT", completed: "85" },
  { language: "JQUERY", completed: "80" },
  { language: "PYTHON", completed: "80" },
  { language: "DJANGO", completed: "85" },
  { language: "DJANGO RESTFRAMEWORK", completed: "80" },
];

export const prevProjects = [
  {
    id: 0,
    img: movies,
    link: "https://92isaac.github.io/Movie-app/",
    github: "https://github.com/92isaac/Movie-app/",
    productDescription:[
      'Built a dynamic  platform  that  delivers  an  immersive  viewing  experience.  Built  using  HTML,  CSS, Bootstrap,  JavaScript  and  Axios,  the  website  integrates  with  the  TMDB  API  to  provide  users  with up-to-date information on the latest movies and TV shows.',
      'The  use  of  Axios ensures  efficient  communication  with  the  API,  while  Bootstrap provides  a responsive design that adapts to different screen sizes. ',
      'With its sleek and user-friendly interface, the website offers a smooth navigation and an engaging user  experience.  This  project  showcases  our  skills  in  web  development  and  API  integration, delivering a high-quality movies website that meets the demands of the modern user.'
    ],
  },
  {
    id: 1,
    img: ecommerce,
    link: "https://bright-gumdrop.netlify.app/",
    github: "https://github.com/92isaac/",
    productDescription:[
      'A dynamic and intuitive platform, designed to deliver an exceptional shopping experience.',
      'Utilizing  useReducer  and  useContext  for  optimized  state  management,  axios  for  back-end communication, and react-router-dom for routing, the website offers a seamless navigation. ',
      'The visually appealing interface, built with tailwind CSS and react-icons, enhances user engagement. Lazy loading optimizes page loading speed, ensuring a fast and smooth user experience.'
    ],
  },
  {
    id: 2,
    img: hernalytic,
    link: "https://hernalytics-test.netlify.app/",
    github: "https://github.com/92isaac/hernalytics",
    productDescription:[
      '',
      '',
    ],
  },
  {
    id: 3,
    img: lasop,
    link: "https://lasop.net/",
    github: "https://github.com/92isaac",
    productDescription:[
      '',
      '',
    ],
  },
  {
    id: 4,
    img: url,
    link: "https://url-shortner-sooty.vercel.app/",
    github: "https://github.com/92isaac/url-shortner",
    productDescription:[
      '',
      '',
    ],
  },
  {
    id: 5,
    img: home,
    link: "https://92isaac.github.io/room-homepage-master/",
    github: "https://github.com/92isaac/room-homepage-master",
    productDescription:[
      'Developed a responsive website using HTML, CSS, and JavaScript to showcase a hero section with an image carousel and text content that dynamically changes based on the selected image.',
      'Utilized CSS grid and flexbox to create a responsive layout that adjusts to different screen sizes.',
      "Implemented JavaScript functions to enable users to navigate through the image carousel using left and right arrows, and a toggle button to show or hide a navigation menu.",
    ],
  },
];
