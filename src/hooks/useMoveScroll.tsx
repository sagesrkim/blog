"use client";
import { useRef } from "react";

// 수정된 hook
function useMoveScroll(index: string) {
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return { element, onMoveToElement };
}

export default useMoveScroll;

// "use client";
// import { useRef } from "react";

// //hook
// function useMoveScroll() {
//   const element = useRef<HTMLDivElement>(null);
//   const onMoveToElement = () => {
//     element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };
//   return { element, onMoveToElement };
// }

// export default useMoveScroll;

// "use client";
// import { useRef } from "react";

// // 수정된 hook
// function useMoveScroll(targetName: string) {
//   const element = useRef<HTMLDivElement>(null);
//   const onMoveToElement = () => {
//     const targetElement = document.querySelector(`[data-name="${targetName}"]`);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };
//   return { element, onMoveToElement };
// }

// export default useMoveScroll;
