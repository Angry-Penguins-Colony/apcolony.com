import * as React from 'react';
import './hatchingHome.scss';
import { routeNames } from 'routes';
import HatchingCard from '../HatchingCard';
import HowToHatch from '../HowTo';
import RarityInfos from '../RarityInfos';

const HatchingHome = () => {

    document.body.style.background = '#6d92c5';


    return (
        <div id="hatchingHome">
            <div id="hatchingHero">
                <img src="/img/Penguins_hatch_hero.png" />
            </div>
            <div id="topPage" className='container'>
                <div className="reveal">
                    <h1>REVEAL THE ANGRY<br /> PENGUINS IN YOUR EGGS</h1>
                    <div className='eggSurprise'>
                        <img src="/img/opened_egg_surprise.png" />
                    </div>
                    <a href={routeNames.hatchingSelection} className="button button-outline">HATCH THEM NOW</a>
                </div>

                <HowToHatch />

                <RarityInfos />
            </div>

            <div id="penguinNest">
                <h2>PENGUIN NEST</h2>
                <HatchingCard />
            </div>
        </div>
    );
};

export default HatchingHome;