import HTMLFlipBook from "react-pageflip";

import { TypingSynopsis, TypingTitle } from "./typingMotion";
import {OldBookBackground} from "../atoms/img";


export function MyBook() {
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
        <TypingSynopsis />
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