import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Dot, LoadingContainer } from "./styles";

export const LoadingDots = () => {
  const dotsRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(dotsRef.current.children, {
        opacity: 1,
        y: -6,
        stagger: 0.2,
        duration: 0.4,
        ease: "power2.out",
      }).to(dotsRef.current.children, {
        opacity: 0.3,
        y: 0,
        stagger: 0.2,
        duration: 0.4,
        ease: "power2.inOut",
      });
    },
    { scope: dotsRef },
  );

  return (
    <LoadingContainer ref={dotsRef}>
      <Dot />
      <Dot />
      <Dot />
    </LoadingContainer>
  );
};
