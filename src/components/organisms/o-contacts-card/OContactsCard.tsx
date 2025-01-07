import { Chip } from "@nextui-org/react";
import NCardBody from "../../atoms/n-card-body/NCardBody";
import NUser from "../../atoms/n-user/NUser";
import MCard, { IMCardProps } from "../../molecules/m-card/MCard";
import "./OContactsCard.scss";
import classNames from "classnames";
export interface OContactsCardProps extends IMCardProps {
  className?: string;
}

function OContactsCard({ className, ...rest }: OContactsCardProps) {
  return (
    <MCard className={classNames("o-contacts-card", className)} {...rest}>
      <NCardBody className="o-contacts-card-body">
        <NUser
          className="o-contacts-card-body-user"
          avatarProps={{
            className: "avatar-size",
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            alt: "avatar",
            
          }}
          name="John Doe"
          description={
            <Chip
              className="o-contacts-card-body-chip"
              color="warning"
              variant="dot"
            >
              Online
            </Chip>
          }
        />
      </NCardBody>
    </MCard>
  );
}

export default OContactsCard;
