import { useState, useEffect } from 'react';

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

  return <h3 className="main-title">{blogTitle}</h3>;
};

export function TypingSynopsis({...props}){
  const originString = props.typeString;

  const [typingStory, setTypingStory] = useState('')
  const [count, setCount] = useState(-1);

  useEffect(() => {
    const typingInterval = setTimeout(() => {
      setTypingStory((prevStoryValue) => {
        let result = prevStoryValue ? prevStoryValue + originString[count] : originString[0];
        setCount(count + 1);
        
        return result;
        });
    }, 100);

    if (count == originString.length) {
        clearInterval(typingInterval);
        props.setIsNowTyping(false)
    }

    return () => {
      clearInterval(typingInterval);
    };
  },[count]);

  return <p className="synopsis" key={props.key}>{typingStory}</p>;
}