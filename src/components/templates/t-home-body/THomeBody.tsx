import React from "react";
import "./THomeBody.scss";
import OBody from "../../organisms/o-body/OBody";
import OStoryCard from "../../organisms/o-story-card/OStoryCard";
import OFeedCard from "../../organisms/o-feed-card/OFeedCard";
import OContentCard from "../../organisms/o-content-card/OContentCard";
import {isMobile} from "react-device-detect"
import classNames from "classnames";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/n-shadui-carousel/NSCarousel";

const THomeBody: React.FC = () => {

  return (
    <OBody className="t-home-body" backgroundColor="transparent">
      <div className="t-home-body-stories">
        <p className="Card_name_label">Stories</p>
        <div>
          
            <Carousel
            
              opts={{
                
                dragFree: isMobile,
                slidesToScroll: 3,
              }}
            >
              <CarouselContent>
                {Array.from({ length: 20 }).map((_, index) => (
                  <CarouselItem key={index} className="carousel-item">
                    <OStoryCard
                      className="slide-item"
                      imageClassName="slide-image"
                      avatarClassName="slide-avatar"
                      footerClassName="slide-footer"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious className="prev-button" />
                  <CarouselNext className="next-button" />
                </>
              )}
            </Carousel>
          
        </div>
        <div className="sub_div"></div>
      </div>

      <div className="t-home-body-feeds">
        <p className={classNames("Card_name_label")}>Feeds</p>
        <OFeedCard />
        <div className="sub_div"></div>
      </div>

      <div className="t-home-body-content">
        <OContentCard />
        <div className="sub_div"></div>
      </div>

      <div className="t-home-body-content">
        <OContentCard />
      </div>
    </OBody>
  );
};

export default THomeBody;
