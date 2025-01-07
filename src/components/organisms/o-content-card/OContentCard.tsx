import NCardBody from "../../atoms/n-card-body/NCardBody";
import NCardFooter from "../../atoms/n-card-footer/NCardFooter";
import NImage from "../../atoms/n-Image/NImage";
import NUser from "../../atoms/n-user/NUser";
import { IMCardProps } from "../../molecules/m-card";
import MCard from "../../molecules/m-card/MCard";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";

import "./OContentCard.scss";
import MIconButton from "../../molecules/m-icon-button/MIconButton";

export interface OContentCardProps extends IMCardProps {}

function OContentCard({ ...rest }: OContentCardProps) {
  return (
    <MCard className="o-content-card" {...rest}>
      <NCardBody className="o-content-card-body">
        <div className="image-container">
          <NImage
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            alt="image1"
          />
          <NImage
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            alt="image1"
          />
          {/* <NImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="image1" /> */}
        </div>
      </NCardBody>
      <NCardFooter className="footer-container">
        <div className="footer-container-user">
          <NUser
            name="John Doe"
            description="1 hr"
            classNames={{description: "subtext"}}
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              alt: "avatar",
              className: "avatar-size",
            }}
          />
          <MIconButton Icon={<BsThreeDots size={20} />} />
        </div>
        <div className="footer-container-content">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </span>
        </div>
        <div className="footer-container-actions">
          <MIconButton Icon={<AiOutlineLike size={20} />} />
          <p>100</p>
          <MIconButton Icon={<FaRegCommentAlt size={20} />} />

          <p>200</p>
        </div>
      </NCardFooter>
      

    </MCard>
  );
}

export default OContentCard;
