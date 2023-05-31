import movies from "../assets/fresh.png";
import hernalytic from "../assets/hernalytic.png";
import ecommerce from "../assets/e-commerce.png";
import lasop from "../assets/lasop.png";
import home from "../assets/home.png";
import url from "../assets/url.png";
import tokosmile from '../assets/tokosmile3.png'
import geotravels from '../assets/Geotravel and 1 more page - Personal - Microsoft​ Edge 5_23_2023 4_11_02 AM.png'

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
    path: "/Sangodare Isaac Oluwatobi Resume.pdf",
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
  { language: "NEXTJS", completed: "80" },
  { language: "JQUERY", completed: "80" },
  { language: "PYTHON", completed: "80" },
  { language: "DJANGO", completed: "85" },
  { language: "DJANGO RESTFRAMEWORK", completed: "85" },
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
      'With its sleek and user-friendly interface, the website offers a smooth navigation and an engaging user  experience.  This  project  showcases  our  skills  in  web  development  and  API  integration, delivering a high-quality movies website that meets the demands of the modern user.',
      "The project delivers a dynamic and immersive viewing experience to users by integrating with the TMDB API to provide up-to-date information on the latest movies and TV shows. Using HTML, CSS, Bootstrap, JavaScript, and Axios, I built a platform that efficiently communicates with the API, while also providing a responsive design that adapts to different screen sizes. Our website is a user-friendly and aesthetically pleasing platform that enhances our users' movie and TV show viewing experience"
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
      'Built a web application that analyzes and displays election results in a user-friendly manner. The application is built with HTML, CSS, tailwind CSS, JavaScript, and React, and connects to a production-ready API for retrieving the data(API integrations). To effectively represent and analyze the data, I implemented different types of charts. Additionally, I incorporated an SVG map to provide an intuitive display of the election results by state. To ensure the application meets industry standards, I implemented error handling using best practices.',
      'I successfully developed a production-ready election result analysis webpage that connects to a powerful API. The user interface was designed to provide an immersive experience, with a variety of charts and graphs representing the analyzed data. To better visualize the result, I implemented an SVG map that accurately displays the results for each state of the federation. Furthermore, I ensured that industry best practices were followed when handling errors, ensuring the website runs smoothly. Overall, the project provides valuable insights into election results, enabling users to make informed decisions based on the analyzed data.',
    ],
  },
  {
    id: 3,
    img: lasop,
    link: "https://lasop.net/",
    github: "https://github.com/92isaac",
    productDescription:[
      'Redesigning of Lagos School of Programming website came up with the intention to create an advanced and simple-to-use digital system that acts as a hub connecting students, teachers along with parents. By using responsive design along with streamlined navigation it aims towards prioritizing accessibility as well as user-friendliness. This ensures that there is easy access to important school information like resources or communication channels.',
      'To achieve the aim of the school, the project was built with React library',
      ' Built the project using the Bootstrap framework to achieve a responsive, user-friendly user interface.',
      'API integrations were made possible through the use of the Axios data-fetching library',
      'With the solution, accessing course materials seamlessly and promoting efficient collaboration enhances the educational experience. It promotes a robust feeling of togetherness in the school environment. The Implementation of a responsive design, cross-browser compatibility, and mobile-first website increased mobile traffic by 20%'
    ],
  },
  {
    id: 4,
    img: geotravels,
    link: "https://geotravels.vercel.app/",
    github: "https://github.com/92isaac/",
    productDescription:[
      'The project creates a dynamic and immersive online platform that showcases breathtaking destinations, provides seamless booking experiences, and offers comprehensive travel information.',
      'To achieve a responsive design and intuitive user interfaces, I used tailwind CSS and also Styled Components.  it prioritizes user engagement and satisfaction, ensuring easy navigation and captivating visuals.',
      " For effective state management across the project, the Redux toolkit state management library was put to use.",
      "In line with the industry's best practices, React Hooks, was incorporated into this project. ",
      'Leveraging cutting-edge technologies and a robust backend infrastructure through the team of developers coming together on this project, my team player ability was stretched.',
      'The outcome of this project is a visually stunning and user-friendly platform that seamlessly connects travelers with their dream destinations. Travel options are available for users to browse through effortlessly, accessing detailed itineraries and booking their trips securely with ease. By offering extensive details, easy reservation procedures, and a visually captivating website that sparks wanderlust, our solution elevates the overall travel experience.'
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
  {
    id: 6,
    img: tokosmile,
    link: "https://tokosmile.vercel.app/",
    github: "https://github.com/92isaac/",
    productDescription:[
      'This project revolves around creating a robust and secure online platform that enables seamless shopping experiences for customers. With a user-friendly interface, intuitive navigation, and a secure payment gateway.',
      'Leveraged React to build the interactive user interface of the e-commerce web application and Typescript for type check.',
      'Utilized Redux Toolkit for state management, ensuring a predictable and scalable data flow within the application.',
      'Employed Redux Toolkit Query for efficient data fetching and management, ensuring seamless integration with the backend APIs.',
      'Implemented Tailwind CSS to create a responsive and visually appealing design, delivering an exceptional user experience.',
      'The outcome empowers businesses to showcase their products, manage inventory, and process transactions efficiently. It prioritizes performance optimization, responsive design, and personalized shopping recommendations to enhance customer satisfaction and drive sales growth. It is a polished and user-centric website that seamlessly blends captivating visuals, intuitive navigation, and efficient functionality. By leveraging cutting-edge technologies such as React, Redux Toolkit, and Tailwind CSS, we have created a dynamic and responsive platform that enhances user engagement and satisfaction. Our solution reflects meticulous attention to detail, delivering a seamless user experience and setting a new standard in web development.'
    ],
  },
  {
    id: 7,
    img: url,
    link: "https://url-shortner-sooty.vercel.app/",
    github: "https://github.com/92isaac/url-shortner",
    productDescription:[
      '',
      '',
    ],
  },
];
