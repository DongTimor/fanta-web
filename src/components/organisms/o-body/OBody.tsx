import React from 'react';
import './OBody.scss';
import classNames from 'classnames';

interface OBodyProps {
    className?: string;
    children: React.ReactNode;
    backgroundColor?: string;
}

const OBody: React.FC<OBodyProps> = ({className,children,backgroundColor}:OBodyProps) => {
    return (
        <div className= {classNames("o-body", className)} style={{backgroundColor: backgroundColor}}>
            {children}
        </div>
    );
};

export default OBody;