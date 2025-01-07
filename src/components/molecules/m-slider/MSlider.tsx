import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MSlider.scss";

export interface MSliderProps {
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  infinite: boolean;
  autoplay: boolean;
  dots: boolean;
  children: React.ReactNode;
  variableWidth: boolean;
  draggable: boolean;
  swipe: boolean;
  touchMove: boolean;
  swipeToSlide: boolean;
  touchThreshold: number;
  focusOnSelect: boolean;
  centerMode: boolean;
}

function MSlider({
  speed,
  slidesToShow,
  slidesToScroll,
  arrows,
  infinite,
  autoplay,
  dots,
  children,
  variableWidth,
  draggable,
  swipe,
  touchMove,
  swipeToSlide,
  touchThreshold,
  focusOnSelect,
  centerMode
}: MSliderProps) {
  const settings = {
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: arrows,
    infinite: infinite,
    autoplay: autoplay,
    dots: dots,
    variableWidth: variableWidth,
    draggable: draggable,
    swipe: swipe,
    touchMove: touchMove,
    swipeToSlide: swipeToSlide,
    touchThreshold: touchThreshold,
    focusOnSelect: focusOnSelect,
    centerMode: centerMode,
    };

  return <Slider className="m-slider" {...settings} >
    {children}
  </Slider>;
}

export default MSlider;
