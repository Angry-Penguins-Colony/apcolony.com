import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingIcon = (props: {
    className?: string;
}) => {
    return <FontAwesomeIcon icon={faCircleNotch} spin size='3x' className={props.className} />;
};

export default LoadingIcon;