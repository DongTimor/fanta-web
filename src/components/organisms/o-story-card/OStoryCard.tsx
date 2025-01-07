import MCard, { IMCardProps } from "../../molecules/m-card/MCard";
import NAvatar from "../../atoms/n-avatar/NAvatar";
import NCardFooter from "../../atoms/n-card-footer/NCardFooter";
import NImage from "../../atoms/n-Image/NImage";
import "./OStoryCard.scss";

export interface IOStoryCardProps extends IMCardProps {
  className?:string
  imageClassName?:string
  avatarClassName?:string
  footerClassName?:string
}

function OStoryCard({ className, imageClassName, avatarClassName, footerClassName, ...rest }: IOStoryCardProps) {
  return (
    <MCard
      // isFooterBlurred
      radius="lg"
      className={`story-card ${className}`}
      {...rest}
    >
      <NImage
        alt="Woman listing to music"
        className={`object-cover rounded ${imageClassName} `}
        
        src="https://nextui.org/images/hero-card.jpeg"
      />
      <NCardFooter className={`story-card-footer ${footerClassName}`}>
        <NAvatar
        className={`avatar-className ${avatarClassName}`}
          size="lg"
          classNames={{
            base: "border-1 ",
          }}
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <p className="text-white">Hiếu cute</p>
      </NCardFooter>
    </MCard>
  );
}

export default OStoryCard;
