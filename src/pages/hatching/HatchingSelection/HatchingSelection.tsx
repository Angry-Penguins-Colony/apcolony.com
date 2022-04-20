import * as React from 'react';
import HatchingInventory from '../HatchingInventory';
import HowTo from '../HowTo';
import RarityInfos from '../RarityInfos';
import './hatchingSelection.scss';

const HatchingSelection = () => {
    document.body.style.background = '#6d92c5';

    return (
        <div id="hatchingSelection">
            <HatchingInventory canMultiSelect={true} />
            <HowTo />
            <RarityInfos />
        </div>
    );
};

export default HatchingSelection;