import NButton from "../../atoms/n-button/NButton";
import { IMCardProps } from "../../molecules/m-card";
import MCard from "../../molecules/m-card/MCard";
import "./OEventCard.scss";
import NCardBody from "../../atoms/n-card-body/NCardBody";
import classNames from "classnames";
import { BsCalendar2Event } from "react-icons/bs";

export interface IOEventCardProps extends IMCardProps {
  className?: string;
}

function OEventCard({ className, ...rest }: IOEventCardProps) {
  return (
    <MCard className={classNames("o-event-card", className)} {...rest}>
      <NCardBody className="body-card">
        <div>
          <BsCalendar2Event />
        </div>
        <div className="label-group">
          <label className={classNames("group-label", "group-name-label")}>Super Bowl party</label>
          <label className={classNames("address-label", "subtext")}>97281 kiam St. Houston, TX</label>
        </div>

        <NButton className="detail-button" variant="light">
          Details
        </NButton>
      </NCardBody>
    </MCard>
  );
}

export default OEventCard;
