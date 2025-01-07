import { AvatarGroup, AvatarGroupProps } from "@nextui-org/react";

export interface INAvatarGroupProps extends AvatarGroupProps {}

function NAvatarGroup({ ...rest }: INAvatarGroupProps) {
  return <AvatarGroup {...rest} />;
}

export default NAvatarGroup;