import { useState, useEffect } from 'react';
import synopsis from '../../../_public/storyData/Synopsis.json'

export function TypingTitle(){
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const title = 'RED BEAN & BLACK BEAN';

  useEffect(() => {
    const typingInterval = setTimeout(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + title[count] : title[0];
        setCount(count + 1);
        
        return result;
        });
    }, 100);

    if (count == title.length) {
        clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <h1 className="main-title">{blogTitle}</h1>;
};

export function TypingSynopsis(){
  const [story, setStory] = useState('');
  const [count, setCount] = useState(0);
  const title = synopsis["1"] + synopsis["2"] ;

  useEffect(() => {
    const typingInterval = setTimeout(() => {
      setStory((prevStoryValue) => {
        let result = prevStoryValue ? prevStoryValue + title[count] : title[0];
        setCount(count + 1);
        
        return result;
        });
    }, 100);

    if (count == title.length) {
        clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <p className="synopsis">{story}</p>;
}