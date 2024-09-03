"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

import ClearAllIcon from "@mui/icons-material/ClearAll";

import UserInfoForHeader from "../atomic/organisms/userInfoForHeader";
import useLayoutStore from "@/app/_store/useLayout";

export default function Header() {
  const { data: sessionData } = useSession();
  console.log("sessionData", sessionData);
  const { isSnbOpen, toggleOpen } = useLayoutStore();

  return (
    <div className={`header ${isSnbOpen ? "open" : ""}`}>
      <h1 className="logo">
        <Link href="/">
          <span className="summary-logo">🫘</span>
          <span className="full-logo">🫘Red&Black Beans</span>
        </Link>
      </h1>
      <div className="gnb">
        <button
          className="snb-open-btn"
          onClick={() => toggleOpen("isSnbOpen", !isSnbOpen)}
        >
          <ClearAllIcon />
        </button>

        <UserInfoForHeader sessionData={sessionData} />
      </div>
    </div>
  );
}
