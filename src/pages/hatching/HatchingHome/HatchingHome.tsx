import * as React from 'react';
import Popup from 'pages/Home/Popup';
import './hatchingHome.scss';
import HowToHatch from '../HowTo';

const HatchingHome = () => {

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
                    <div className="button button-outline">HATCH THEM NOW</div>
                    {/* TODO: bind button */}
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
                <div className="hatchingCard">
                    <div className="yourInventory">
                        <h3>YOUR INVENTORY</h3>
                        <div className="items">
                            <div className="egg">
                                {/* TODO: get good inventory */}
                                <img src="" alt="" />
                            </div>
                            <div className="egg">
                                <img src="" alt="" />
                            </div>
                            <div className="egg">
                                <img src="" alt="" />
                            </div>
                            <div className="penguin">
                                <img src="" alt="" />
                            </div>
                            <div className="penguin">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="infos">
                        <h3>INFOS</h3>
                        <div className="content">
                            <img src="" alt="" className="egg" />
                            <h4>TIER 1 EGG</h4>
                            <p>This is a tier 1 egg, you can see it by is bronze halo on it</p>
                            <div className="button">HATCH THIS EGG</div>
                            {/* TODO: bind button */}
                            {/* TODO: good info */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HatchingHome;