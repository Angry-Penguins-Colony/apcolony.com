import * as React from 'react';
import './hatchingHome.scss';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { DisconnectWalletButton } from 'components/DisconnectWallet/DisconnectWalletButton';
import HatchingCard from '../HatchingCard';
import HowToHatch from '../HowTo';
import RarityInfos from '../RarityInfos';

const HatchingHome = () => {

    const { isLoggedIn } = useGetLoginInfo();

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
                    {isLoggedIn ?
                        <div className="d-flex flex-column">
                            <a href="#penguinNest" className="button button-outline px-5">HATCH THEM NOW</a>
                            <DisconnectWalletButton className="button-outline mt-3" showAddress={false} />
                        </div> :
                        <ConnectWalletButton className="button-outline" />
                    }
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