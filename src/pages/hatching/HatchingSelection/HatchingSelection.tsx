import * as React from 'react';
import HatchingCard from '../HatchingCard';
import HowTo from '../HowTo';
import RarityInfos from '../RarityInfos';
import './hatchingSelection.scss';

const HatchingSelection = () => {
    document.body.style.background = '#6d92c5';

    return (
        <div id="hatchingSelection">
            <HatchingCard canMultiSelect={true} />
            <HowTo />
            <RarityInfos />
        </div>
    );
};

export default HatchingSelection;