import './MyIntroduction.css';
import './TypingHeader.css';

import React, { useState, useEffect } from 'react';

export default function MyIntroduction() {

    const fullText = "Christien Jake Pacia";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  // Typing speed: 100ms per character, adjust as needed
  const typingSpeed = 100;

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  useEffect(() => {
    const resetInterval = setInterval(() => {
      // Reset animation every 5 seconds
      setIndex(0);
      setDisplayedText('');
    }, 10000); // 5000 milliseconds = 5 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(resetInterval);
  }, []);

    return(
        <>
      <section className="introductionSection">
        <div className="content">
        <p>Hi, my name is</p> 
         <h1 className="typing-effect-js">{displayedText}</h1>
         <h1 className="hello">I build things for Mobile App</h1>
         <p>Hi, I'm a mobile app developer with experience building apps for both iOS and Android. I’ve worked with Xamarin and C# to create cross-platform apps, and I really enjoy how these tools let me deliver smooth, seamless experiences across multiple devices. On the iOS side, I’ve spent a lot of time with Swift and UIKit, building native apps that are both user-friendly and high-performance.
Alongside mobile development, I’m also passionate about web development. My journey into web development is something I’m excited about, and this portfolio website is actually my first project built with React.js. It’s been a great way to dive deeper into front-end technologies and broaden my skill set.</p>
<p>I also have a solid background in using .NET for backend services, ensuring my apps are backed by scalable, reliable systems.</p> 
<p>I’m always looking for ways to improve my work, whether it's through new tools, technologies, or ways to better integrate mobile and web experiences.
I’m driven by solving problems and creating intuitive, engaging experiences—whether on mobile or the web.</p>


        </div>
     

        </section>
        
        </>
    )
   
}