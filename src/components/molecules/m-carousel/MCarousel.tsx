import { IoArrowBackCircleOutline } from "react-icons/io5";
import MIconButton from "../m-icon-button/MIconButton";
import "./MCarousel.scss";
import { useEffect, useRef, useState } from "react";

export interface IMCarouselProps {
  className?: string;
  children?: React.ReactNode;
}

// function isMobile() {
//   return /Mobi|Android/i.test(navigator.userAgent);
// }

function MCarousel({ className, children }: IMCarouselProps) {
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const touchStartTime = useRef(0);
  const touchEndTime = useRef(0);
  const touchMoveTime = useRef(0);
  const touchMove = useRef(0);
  const scrollLeftPosition = useRef(0);
  const [time, setTime] = useState(0);
  const [v, setV] = useState(0);


  const isDragging = useRef(false);

  const slideContainerRef = useRef<HTMLDivElement>(null);

  // Function to animate the slide
  function animateSlide(v: number, t: number) {
    let s = v * t;

    const animate = () => {
      if (slideContainerRef.current) {
        slideContainerRef.current.scrollLeft += 0.1 * s;
      }

      s -= 0.1 * s;

      if (isDragging.current == false) {
        return;
      }

      if (v > 0) {
        if (s < 0.1) {
          return;
        }
      } else {
        if (s > -0.1) {
          return;
        }
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }

  // Function to handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = false;
    touchStart.current = e.nativeEvent.touches[0].clientX;
    touchStartTime.current = performance.now();
    scrollLeftPosition.current = slideContainerRef.current?.scrollLeft || 0;
  };

  // Function to handle touch end
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEnd.current = e.nativeEvent.changedTouches[0].clientX;
    touchEndTime.current = performance.now();
    console.log("timeEnd",touchEndTime.current);
    console.log("timeMove",touchMoveTime.current);

    console.log("time",touchEndTime.current-touchMoveTime.current);
    setTime(touchEndTime.current-touchMoveTime.current);
    setV((touchEnd.current-touchStart.current)/(touchEndTime.current-touchStartTime.current));
    scrollLeftPosition.current = slideContainerRef.current?.scrollLeft || 0;

    if(touchEndTime.current - touchMoveTime.current<10){
      if (
        (touchEnd.current - touchStart.current) /
          (touchEndTime.current - touchStartTime.current) >
          0.5||
        (touchEnd.current - touchStart.current)*2 /
          (touchEndTime.current - touchStartTime.current) <
        -0.5
      ) {
        animateSlide(
          -(touchEnd.current - touchStart.current) /
            (touchEndTime.current - touchStartTime.current) *2,
          200
        );
      }
    }

          


  };

  // Function to handle touch move
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    touchMoveTime.current = performance.now();
    isDragging.current = true;
    touchMove.current = e.touches[0].clientX;
    if (slideContainerRef.current) {
      slideContainerRef.current.scrollLeft =
        scrollLeftPosition.current + (touchStart.current - touchMove.current);
    }
  };


  useEffect(() => {
    const slideContainer = slideContainerRef.current;
    if (slideContainer) {
      slideContainer.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }
    return () => {
      if (slideContainer) {
        slideContainer.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

  return (
    <div className={`m-carousel ${className}`}>
      <MIconButton
        className="m-carousel__prev"
        Icon={<IoArrowBackCircleOutline />}
      />
      <div
        className="slide-container"
        ref={slideContainerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
      <MIconButton
        className="m-carousel__next"
        Icon={<IoArrowBackCircleOutline />}
      />
      <p style={{color:"black", backgroundColor:"red", position:"absolute", top:"0", left:"0" }} >{time}</p>
      <p style={{color:"black", backgroundColor:"red", position:"absolute", top:"15px", left:"0" }} >{v}</p>

    </div>
  );
}

export default MCarousel;
