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
        <main >
       <p>Hi, my name is</p> 
        <h1 className="typing-effect-js">{displayedText}</h1>
        <h1 className="hello">I build things for Mobile App</h1>
        <p>I am an enthusiastic iOS Developer with hands-on 
        experience in building and deploying iOS applications
        using Swift and UIKit. I am currently working on an iOS application for my team and integrating API calls to connect with backend services developed by our web developers. Throughout my journey, I have developed a strong foundation in mobile app development and am actively implementing 
         industry-standard design patterns like MVVM to ensure code maintainability, scalability, and testability.</p>
        <p>
            Well, I love to learn and study new technology so I will not limit my self in Mobile development only. Here I am, exploring web development and guest what? This is my first ever website! I hope you like it! :)
        </p>
        </main>
        
        </>
    )
   
}