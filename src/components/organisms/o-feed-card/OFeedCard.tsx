import NAvatar from "../../atoms/n-avatar/NAvatar";
import MCard, { IMCardProps } from "../../molecules/m-card/MCard";
import MIconButton from "../../molecules/m-icon-button/MIconButton";
import { FiPhoneCall, FiMic, FiCamera } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import "./OFeedCard.scss";
import NCardBody from "../../atoms/n-card-body/NCardBody";
import classNames from "classnames";
export interface OFeedCardProps extends IMCardProps {
  className?: string;
}

function OFeedCard({ className, ...rest }: OFeedCardProps) {
  return (
    <MCard className={classNames("o-feed-card", className)} {...rest}>
      <NCardBody className="o-feed-card-body">


        <div className="o-feed-card-input-container">
        <NAvatar
          className={classNames("o-feed-card-avatar", "avatar-size")}
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          alt="avatar"
        />
            What's on your mind, Johny?
        </div>
        <div className="o-feed-card-end-content">
          <MIconButton className="transparent-button" Icon={<FiPhoneCall size={20} />} />
          <MIconButton className="transparent-button" Icon={<FiMic size={20} />} />
          <MIconButton className="transparent-button" Icon={<BsCameraVideo size={20} />} />
          <MIconButton className="transparent-button" Icon={<FiCamera size={20} />} />
        </div>
      </NCardBody>
    </MCard>
  );
}

export default OFeedCard;
