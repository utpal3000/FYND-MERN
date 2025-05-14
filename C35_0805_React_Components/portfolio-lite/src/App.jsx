import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar"
import About from './components/About'
import Section from './components/Section'
import Footer from './components/Footer'
import RelativeList from './components/RelativeList'  

function App() {
  // const [count, setCount] = useState(0)
  let sectionData = [
    {
      heading: "Projects",
      content: "Here are some of the projects I've worked on recently:\n\n1. 30 Days of JavaScript Challenge\nA comprehensive 30-day coding challenge designed to enhance JavaScript skills through daily tasks and projects.\nTechnologies: JavaScript\nHighlights: Covers fundamental to advanced JavaScript concepts, promoting consistent coding practice.\nGitHub: https://github.com/utpal3000/30-Days-of-JS-Challenge\n\n2. React Basics\nA collection of foundational React projects aimed at understanding core concepts and building dynamic user interfaces.\nTechnologies: React.js, JavaScript\nHighlights: Includes components, state management, and routing examples.\nGitHub: https://github.com/utpal3000/React-Basics\n\n3. Portfolio Website\nA personal portfolio website showcasing projects, skills, and experiences.\nTechnologies: HTML, CSS, JavaScript\nHighlights: Responsive design, project showcases, and contact form integration.\nGitHub: https://github.com/utpal3000/Portfolio"
    }
    ,
    {
      heading: "Skills",
      content: "Here are some of the skills I bring to the table:\n\nFront-End Development\nLanguages: JavaScript, HTML, CSS\nFrameworks/Libraries: React.js\nTools: Webpack, Babel, npm\n\nBack-End Development\nLanguages: Node.js\nFrameworks: Express.js\nDatabases: MongoDB, SQL\n\nDevOps & Tools\nVersion Control: Git, GitHub\nOperating Systems: Linux\nOther Tools: VS Code, Postman\n\nAdditional Skills\nCloud Computing: Familiar with deploying applications on cloud platforms\nProblem-Solving: Strong analytical and debugging skills\nCollaboration: Experience working in agile teams using tools like Jira and Trello"
    }
    ,
    {
      heading: "Education",
      content: "I'm a Senior Application Engineer at VOIS with a strong foundation in full-stack development, particularly in the MERN stack (MongoDB, Express.js, React, Node. Have done B.E ENTC from Bhartiya Vidyapeeth, Pune."
    },
    {
      heading: "Contact Me",
      content: "I'm always open to discussing new opportunities, collaborations, or just chatting about tech. Feel free to reach out through any of the following:\n\nEmail: your.email@example.com\nLinkedIn: https://www.linkedin.com/in/yourprofile\nGitHub: https://github.com/utpal3000\nLocation: Based in [Your City], available for remote work\n\nLooking forward to connecting with you!"
    }
    
  ]

  return (
    <>
   
   < Navbar />
<About/>
{
  sectionData.map((item, index) => {
    return <Section heading={item.heading} content={item.content} key={index}/>
  })
}

{/* Footer */}
<Footer/>
<hr />
<RelativeList/>  
{/* Relative list just for test question */}

    </>
  )
}

export default App
