import * as React from 'react';
import HatchingCard from '../HatchingCard';
import HowTo from '../HowTo';
import './hatchingSelection.scss';

const HatchingSelection = () => {
    document.body.style.background = '#6d92c5';

    return (
        <div id="hatchingSelection">
            <HatchingCard bySelection={true} />
            <HowTo />
            {/* TODO: add egg rarity popup + button */}
        </div>
    );
};

export default HatchingSelection;