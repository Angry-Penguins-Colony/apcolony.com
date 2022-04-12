import * as React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
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
                <div className="hatchingCard container">
                    <div className="yourInventory">
                        <h3>YOUR INVENTORY</h3>

                        <ScrollContainer horizontal={false} hideScrollbars={false} className="items">
                            {/* TODO: get good inventory */}
                            <div className="egg selected">
                                <img src="/img/eggs/Silver_egg.png" />
                            </div>
                            <div className="egg">
                                <img src="/img/eggs/Silver_egg.png" />
                            </div>
                            <div className="egg">
                                <img src="/img/eggs/Silver_egg.png" />
                            </div>
                            <div className="egg">
                                <img src="/img/eggs/Gold_egg.png" />
                            </div>
                            <div className="egg">
                                <img src="/img/eggs/Gold_egg.png" />
                            </div>
                            <div className="egg">
                                <img src="/img/eggs/Diamond_egg.png" />
                            </div>
                            <div className="egg">
                                <img src="/img/eggs/Diamond_egg.png" />
                            </div>
                            <div className="egg">
                                <img src="/img/eggs/Diamond_egg.png" />
                            </div>
                            <div className="penguin">
                                <img src="/img/penguins/Untitled design-2.png" />
                            </div>
                            <div className="penguin">
                                <img src="/img/penguins/Untitled design-3.png" />
                            </div>
                            <div className="penguin">
                                <img src="/img/penguins/Untitled design-4.png" />
                            </div>
                            <div className="penguin">
                                <img src="/img/penguins/Untitled design-5.png" />
                            </div>
                            <div className="penguin">
                                <img src="/img/penguins/Untitled design-6.png" />
                            </div>
                            <div className="penguin">
                                <img src="/img/penguins/Untitled design-7.png" />
                            </div>
                            <div className="penguin">
                                <img src="/img/penguins/Untitled design-8.png" />
                            </div>
                        </ScrollContainer>
                    </div>
                    <div className="infos">
                        <h3>INFOS</h3>
                        <div className="content">
                            <img src="/img/eggs/Silver_egg.png" className="egg" />
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