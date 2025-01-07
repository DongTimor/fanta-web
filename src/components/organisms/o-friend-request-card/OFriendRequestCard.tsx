import { IMCardProps } from "../../molecules/m-card";
import MCard from "../../molecules/m-card/MCard";
import NUser from "../../atoms/n-user/NUser";
import NButton from "../../atoms/n-button/NButton";
import { Chip } from "@nextui-org/react";
import "./OFriendRequestCard.scss";
import NCardBody from "../../atoms/n-card-body/NCardBody";
import NCardFooter from "../../atoms/n-card-footer/NCardFooter";
import classNames from "classnames";

export interface IOFriendRequestCardProps extends IMCardProps {
  className?: string;
}
function OFriendRequestCard({ className, ...rest }: IOFriendRequestCardProps) {
  return (
    <MCard className={classNames("o-friend-request-card", className)} {...rest}>
      <NCardBody className="body-card">
        <div className="body-card-left">
          <NUser
            name="Dongtimor961"
            description="3 mutual friends"
            classNames={{description: "subtext"}}
            avatarProps={{
              className: "avatar-size",
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              alt: "avatar",
            }}
          />
          <Chip className="o-friend-request-card-chip" color="warning" variant="dot">2 hrs ago</Chip>
        </div>
      </NCardBody>
      <NCardFooter className="button-group">
        <NButton className="confirm-button" variant="light">
          Confirm
        </NButton>
        <NButton className="delete-button" variant="light">
          Delete
        </NButton>
      </NCardFooter>
    </MCard>
  );
}

export default OFriendRequestCard;
