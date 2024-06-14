import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import { TypingSynopsis, TypingTitle } from "./typingMotion";
import {OldBookBackground} from "../atoms/img";

import synopsis from '@/app/_public/storyData/synopsis.json';

export function MyBook() {
  const [synop, setSynop] = useState(Object.values(synopsis));
  const [nowIdx, setNowIdx] = useState(0);
  const [isNowTyping, setIsNowTyping] = useState(false)

   useEffect(()=>{
    if(nowIdx < synop.length){
      setNowIdx(nowIdx + 1)
      setIsNowTyping(true)
    }
  },[isNowTyping])


  useEffect(()=>{
    setIsNowTyping(true)
  },[])


  return (
    //@ts-ignore
    <HTMLFlipBook width={500} height={500}>
      
      <div className="book-page">
        <OldBookBackground />
        <div className="contents">
          <TypingTitle />
        </div>
      </div>

      <div className="book-page">
        <OldBookBackground />
        {
          isNowTyping
          && <TypingSynopsis key={synop[nowIdx]} typeString={synop[nowIdx]} setIsNowTyping={setIsNowTyping}/>
        }
      </div>

      <div className="book-page">
        Page 3
      </div>
      
      <div className="book-page">
        Page 4
      </div>
    </HTMLFlipBook>
  );
}