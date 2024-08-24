import React from 'react';
import { IonContent } from '@ionic/react';
import './ContentBg.css';

interface IContentBgProps {
    src: string;
    opacity?: number;
    className?: string;
    [key: string]: any;
}

const ContentBg: React.FC<IContentBgProps> = ({
    src,
    opacity = 0.5,
    className,
    ...props
}) => {
    return (
        <IonContent className={`content-bg ${className || ''}`} style={{ '--image-src': `url('${src}')` }} {...props}>
            {props.children}
        </IonContent>
    );
};

export default ContentBg;