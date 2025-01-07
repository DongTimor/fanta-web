import NCardBody from "../../atoms/n-card-body/NCardBody";
import NUser from "../../atoms/n-user/NUser";
import { IMCardProps } from "../../molecules/m-card";
import MCard from "../../molecules/m-card/MCard";
import MIconButton from "../../molecules/m-icon-button/MIconButton";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import "./OUserCard.scss";
import classNames from "classnames";


export interface OUserCardProps extends IMCardProps {
  className?:string
}

function OUserCard({className, ...rest }: OUserCardProps) {
  return (
    <MCard {...rest} className="o-user-card">
      <NCardBody className={classNames("o-user-card-body",className)}>
        <MIconButton Icon={<AiOutlineThunderbolt />} />
        <MIconButton Icon={<BsChatDots />} />
        <MIconButton Icon={<VscBell />} />
        <NUser
          classNames={{ name: classNames("User_name", "name_fix"), base: "User_name_base" }}
          name="Hiếu cute"
          avatarProps={{
            className: "avatar-size",
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            alt: "avatar",
          }}
        />
      </NCardBody>

    </MCard>
  );
}

export default OUserCard;
