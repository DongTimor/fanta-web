import { IMCardProps } from "../../molecules/m-card";
import MCard from "../../molecules/m-card/MCard";
import NCardBody from "../../atoms/n-card-body/NCardBody";
import NAvatar from "../../atoms/n-avatar/NAvatar";
import NButton from "../../atoms/n-button/NButton";
import "./OGroupsCard.scss";
import classNames from "classnames";

export interface IOGroupsCardProps extends IMCardProps {
  className?: string;
}

function OGroupsCard({ className, ...rest }: IOGroupsCardProps) {

  return (
    <MCard className={classNames("o-groups-card", className)} {...rest}>

      <NCardBody className="o-groups-body">
        <div className="o-groups-card-left">
          <NAvatar className="o-groups-card-left-avatar" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <label className={classNames("o-groups-card-label", "group-name-label")}>Team Fan Club</label>
        </div>
        <NButton className="o-groups-card-button" variant="light">Edit</NButton>
      </NCardBody>
    </MCard>
  );
}

export default OGroupsCard;
