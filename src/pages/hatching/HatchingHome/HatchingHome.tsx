import * as React from 'react';
import Popup from 'pages/Home/Popup';
import './hatchingHome.scss';
import { routeNames } from 'routes';
import HatchingCard from '../HatchingCard';
import HowToHatch from '../HowTo';

const HatchingHome = () => {

    document.body.style.background = '#6d92c5';

    const [rarityInfosOpen, setRarityInfosOpen] = React.useState(false);

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

                <div className="rarityInfos" onClick={() => setRarityInfosOpen(true)}>
                    <span className="icon">!</span>
                    <p>EGGS RARITY RANK INFOS</p>
                </div>

                <Popup position="bottom" isOpen={rarityInfosOpen} onClose={() => setRarityInfosOpen(false)} className="rarityPopup">
                    <div className="content">
                        <div className="egg">
                            <img src="/img/eggs/Silver_egg.png" alt="Silver Egg" />
                            <p>RANK 1 EGG</p>
                        </div>
                        <div className="egg">
                            <img src="/img/eggs/Gold_egg.png" alt="Gold Egg" />
                            <p>RANK 2 EGG</p>
                        </div>
                        <div className="egg">
                            <img src="/img/eggs/Diamond_egg.png" alt="Diamond Egg" />
                            <p>RANK 3 EGG</p>
                        </div>
                    </div>
                </Popup>
            </div>

            <div id="penguinNest">
                <h2>PENGUIN NEST</h2>
                <HatchingCard />
            </div>
        </div>
    );
};

export default HatchingHome;