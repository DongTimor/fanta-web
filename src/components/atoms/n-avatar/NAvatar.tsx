import { Avatar, AvatarProps } from "@nextui-org/react";

export interface INAvatarProps extends AvatarProps {
    className?: string;
    
}

function NAvatar({ className, ...rest }: INAvatarProps) {
    return (
        <Avatar
            className={className}
            classNames={{
                base: "avatar-size"
            }}
            
            {...rest}
        />
    );
}

export default NAvatar;