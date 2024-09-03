"use client";

import Link from "next/link";
import useLayoutStore from "@/app/_store/useLayout";

export default function Snb() {
  const { isSnbOpen } = useLayoutStore();

  return (
    <div className={`snb ${isSnbOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link href="/game">
            🎮
            <span>게임</span>
          </Link>
        </li>
        <li>
          <Link href="/save">
            🚩
            <span>세이브 포인트</span>
          </Link>
        </li>
        <li>
          <Link href="/like">
            💖
            <span>취향저격</span>
          </Link>
        </li>
        <li>
          <Link href="/history">
            💾
            <span>히스토리</span>
          </Link>
        </li>
        <li>
          <Link href="/chat">
            👄
            <span>채팅</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
