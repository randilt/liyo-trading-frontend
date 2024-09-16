"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const ProgressBarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#ff0000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarWrapper;
