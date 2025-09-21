/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};




const greeting = {
  username: "Hanisha Sarai",
  title: "Hi, I'm Hanisha Sarai",
  subTitle: emoji(
   "I'm a passionate Full Stack Developer who loves creating modern, responsive, and user-friendly web and mobile applications. With strong expertise in JavaScript, React.js, Node.js, and React Native, I enjoy transforming ideas into real-world digital solutions. I thrive on tackling challenging problems, building scalable applications, and ensuring seamless user experiences. " +
    "I am constantly exploring new technologies, frameworks, and best practices to stay ahead in the fast-paced world of software development. Beyond coding, I value collaboration, teamwork, and the opportunity to contribute to innovative projects that make a difference. " 
  ),
  resumeLink:
    "https://drive.google.com/file/d/1SJorSQ3dkXs8cjGPM9HpXNNuyb8x-Wi5/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HanishaSarai",
  linkedin: "https://www.linkedin.com/in/hanisha-sarai-0a88752b6",
  gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am a passionate Full Stack Developer skilled in front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with Git & GitHub for version control. I also have experience in React Native and problem-solving with C++. I enjoy creating responsive, scalable applications and have built projects like a Full Stack Event Management website and a Full Stack Real Estate website.",
  skills: [
    emoji(
      "- Developed highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("- Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "- Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],
  image: require("./assets/images/hanisha pic.jpeg"), // Add image here
  useImage: true, // New property to control image usage
  display: true,

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Red & White Institute",
      logo: require("./assets/images/randw.png"),
      subHeader: "Full Stack Web Development",
      duration: "March 2024 - September 2024",
      
    },
    {
      schoolName: "Sal College Of Engineering",
      logo: require("./assets/images/salimage.png"),
      subHeader: "Bacelor's of Science in Computer Science",
      duration: "March 2022 - April 2026",
      
    },
    {
      schoolName: "Vedant International School",
      logo: require("./assets/images/vedantlogo.png"),
      subHeader: "GSEB AND HSEB",
      duration: "September 2021 - April 2022",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
   
    {
      role: "Advanced Java Webinar",
      company: "Tops Technologies",
      companylogo: require("./assets/images/topslogo.png"),
      date: " 25th Febuary 2023",
      desc: "Attended an insightful webinar focused on advanced concepts of Java programming, including object-oriented programming, multithreading, and database connectivity. The session provided practical knowledge and industry-relevant techniques to enhance coding efficiency and application performance.",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/10sxLP0zhH9kzgsrTUkGa8LmU9FOpK4rO/view?usp=sharing" // Replace with your actual certificate link
        }
      ],
      button: true 
    },
    {
      role: "Webinar on Fudamental Knowledge of E-commerce",
      company: "eMpi B-school",
      companylogo: require("./assets/images/empilogo.png"),
      date: "21 November 2024",
      desc: "Attended an informative webinar that explored key principles of e-commerce, including online retail trends, digital marketing strategies, and customer behavior. The session provided insights into optimizing product listings, enhancing user experience, and leveraging technology to drive sales in the digital marketplace.",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Uo-bVXrN0vS5Rz8ckmLC8QZlJ1oE9XC8/view?usp=sharing" // Replace with your actual certificate link
        }
      ],
      button: true 
    }
  ]
};
const workExperiencesfinal = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "SUDARSANA ENTERPRENEURS UNITS",
      companylogo: require("./assets/images/talabatlogo.png"),
      date: "MAY 2025 - Present",
      desc: "Responsible for designing and developing responsive web applications, building scalable backend systems, and ensuring smooth integration between frontend, backend, and databases to deliver optimized digital solutions.",
      descBullets: [
       "Developed and maintained web applications using React.js, Node.js, Express.js, and MongoDB",
  "Designed intuitive, user-friendly, and responsive UI components for seamless customer experience",
  "Implemented secure authentication, authorization, and API integrations to enhance functionality",
  "Optimized application performance, scalability, and cross-platform compatibility",
  "Collaborated with teams throughout the software development lifecycle, from planning to deployment",
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/vibgyorimage.png" ),
      projectName: "Vibgyor Events & Concepts Website",
      projectDesc: "Developed a comprehensive Event Management Platform that allows users to explore event photos and videos, book consultations, and register for events. The website includes a dedicated admin panel where all form data (consultation, contact, booking) is stored and displayed for efficient management. The platform provides smooth navigation, a responsive UI, and secure backend integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "hhttps://vibgorrwebsite.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/realestate.png" ),
      projectName: "Real Estate Website",
      projectDesc: "Built a dynamic Real Estate Website to showcase properties with images, descriptions, and pricing. The platform supports property search, filtering, and inquiry forms. Data is stored in the backend, and admins can manage property listings efficiently. The design focuses on a user-friendly interface and seamless navigation for both buyers and sellers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://leafy-starburst-f1115b.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/boatpic.png" ),
      projectName: "Boat Website-Clone",
      projectDesc: "A responsive clone of the Boat website, replicating the design, layout, and user experience using modern web technologies. The project showcases proficiency in HTML, CSS, and JavaScript, ensuring seamless navigation and an aesthetically pleasing interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://soft-druid-23e053.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/flowerpic.png"),
      projectName: "Flower Website",
      projectDesc: "A visually appealing flower shop website showcasing a variety of floral arrangements and bouquets. The design emphasizes elegance and simplicity, offering an intuitive shopping experience with seamless navigation and responsive layouts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://inquisitive-cuchufli-96df03.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: false // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "9313266561",
  email_address: "hanishasarai1000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  workExperiencesfinal,
  openSource,
  bigProjects,
  achievementSection,
  // blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
