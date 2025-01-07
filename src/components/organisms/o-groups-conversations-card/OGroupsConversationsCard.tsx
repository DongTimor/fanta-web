import NAvatarGroup from "../../atoms/n-avatar-group/NAvatarGroup";
import NAvatar from "../../atoms/n-avatar/NAvatar";
import NCardBody from "../../atoms/n-card-body/NCardBody";
import MCard, { IMCardProps } from "../../molecules/m-card/MCard";
import { LuClock } from "react-icons/lu";
import "./OGroupsConversationsCard.scss";
import classNames from "classnames";

export interface OGroupsConversationsCardProps extends IMCardProps {
  className?: string;
}

function OGroupsConversationsCard({ className, ...rest }: OGroupsConversationsCardProps) {
  return (
    <MCard className={classNames("o-groups-conversations-card", className)} {...rest}>
      <NCardBody className="o-groups-conversations-card-body">
        <NAvatarGroup max={3} classNames={{count: "avatar-size"}}>
          <NAvatar className="avatar-size" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <NAvatar className="avatar-size" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <NAvatar className="avatar-size" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <NAvatar className="avatar-size" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <NAvatar className="avatar-size" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <NAvatar className="avatar-size" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <NAvatar className="avatar-size" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </NAvatarGroup>
        <div className="o-groups-conversations-card-group">
          <label className={classNames("o-groups-conversations-card-group-name", "group-name-label")}>Group Name</label>

          <div className="o-groups-conversations-card-time">
            <LuClock />
            <label className={classNames("o-groups-conversations-card-time-label", "subtext")}>Last seen 1 day ago</label>
          </div>
        </div>
      </NCardBody>
    </MCard>
  );
}

export default OGroupsConversationsCard;
