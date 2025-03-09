import './SkillsAndExperience.css';

export default function SkillsAndExperience(){
    return(
        <>
        <main className="skillSection">
        <h3 className="skillTitle">Skills</h3>
            <ul className="skills">
                <li>Swift</li>
                <li>C#</li>
                <li>.NET</li>
                <li>MySql</li>
            </ul>

            <div className="container">
      <div className="column">
        <h2>Software Engineer (Full-Stack Developer) | FILAM SOFTWARE 
        </h2>
        <p>June 2018 – February 2021</p>
        <ul>
            <li>Full-stack developer for the Kachinga mobile application, contributing to both front-end 
            and back-end functionality using C#, .NET, and MySQL. </li>
            <li>Designed and implemented APIs, integrating seamless communication between the 
mobile app's front-end and back-end systems, improving data synchronization and user 
experience. </li>
            <li> Developed and optimized networking functionality, managing asynchronous API calls to 
            ensure smooth data retrieval and real-time updates in the mobile app.</li>
            <li> Created and maintained a MySQL database from scratch, structuring data for scalability, 
            optimizing queries for performance, and ensuring data consistency and integrity. </li>
            <li>Collaborated in an agile environment, working closely with cross-functional teams to 
            ensure timely delivery of high-quality features.</li>
        </ul>
      </div>
      <div className="column">
        <h2>Lead iOS Developer | UNLIMITEDIA, INC</h2>
        <p>August 2024 – Present</p>
        <ul>
            <li>Lead the design, development, and deployment of 4 iOS mobile applications 
concurrently, utilizing Swift, UIKit, and the MVVM (Model-View-ViewModel) design 
pattern to create clean, maintainable, and scalable code. </li>
            <li>Sole developer for one of the projects, responsible for managing the entire app lifecycle 
from concept to launch, ensuring seamless performance and high-quality user 
experience. </li>
            <li>Designed and implemented user-centric UI/UX solutions for all three apps, focusing on 
            intuitive, responsive interfaces and aligning with brand identity and user expectations. </li>
            <li>Architected and optimized app flows, ensuring smooth navigation and interaction 
between views, leveraging MVVM to separate UI from business logic for improved 
maintainability.</li>
            <li>Integrated and optimized API calls to support real-time updates and efficient data 
            handling, utilizing best practices for asynchronous data fetching and state management. </li>
            <li>Managed version control and collaboration using Gitea, ensuring smooth integration and 
            consistent code quality across multiple projects. </li>
        </ul>
      </div>
    </div>
        </main>
      
        
        </>
    )
}