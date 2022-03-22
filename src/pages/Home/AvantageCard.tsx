import * as React from 'react';

const AvantageCard = (props: {
    title: string;
    image: string;
    imageClassName?: string;
    children: React.ReactNode;
}) => {
    const title = props.title;
    const image = props.image;
    const imageClassName = props.imageClassName || '';
    const children = props.children;

    return (
        <div className='avantageCard'>
            <div className={'image ' + imageClassName}>
                <img src={image} />
            </div>
            <div className='content'>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default AvantageCard;