import React, { useEffect, useState } from 'react';
import './OSider.scss';
import classNames from 'classnames';

interface OSiderProps {
    className?: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    children: React.ReactNode;
}

const OSider: React.FC<OSiderProps> = ({className,width,height,backgroundColor,children}:OSiderProps) => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={classNames("o-sider", className, { 'sticky': isSticky })} style={{width: width,height: height,backgroundColor: backgroundColor}}>
            {children}
        </div>
    );
};

export default OSider;