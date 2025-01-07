import React, { useState, useEffect } from 'react';
import './OHeader.scss';
import classNames from 'classnames';

interface OHeaderProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: React.ReactNode;
    width?: number;
    height?: number;
    backgroundColor?: string;
}

const OHeader: React.FC<OHeaderProps> = ({className, children,width,height,backgroundColor, ...rest}:OHeaderProps) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={classNames('o-header', className, { 'sticky': isSticky })} style={{width: width,height: height,backgroundColor: backgroundColor}} {...rest}>
            {children}
        </header>
    );
};

export default OHeader;