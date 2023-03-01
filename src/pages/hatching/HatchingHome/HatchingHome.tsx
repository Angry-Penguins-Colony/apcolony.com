import * as React from 'react';
import './hatchingHome.scss';
import { useGetLoginInfo } from '@multiversx/sdk-dapp/hooks';
import { HashLink as AnchorLink } from 'react-router-hash-link';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { DisconnectWalletButton } from 'components/DisconnectWallet/DisconnectWalletButton';
import { routeNames } from 'config';
import HatchContextProvider from '../HatchContext/HatchContextProvider';
import HatchingInventory from '../HatchingInventory';
import HatchingVideo from '../HatchingVideo/HatchingVideo';
import HatchResult from '../HatchResult/HatchResult';
import HowToHatch from '../HowTo';
import RarityInfos from '../RarityInfos';

const HatchingHome = () => {

    const { isLoggedIn } = useGetLoginInfo();

    document.body.style.background = '#6d92c5';

    return (
        <HatchContextProvider>

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
                            <div className="actionsButtons">
                                <AnchorLink to="#penguinNest">
                                    <div className="button button-outline px-5">HATCH THEM NOW</div>
                                </AnchorLink>
                                <DisconnectWalletButton className="button-outline mt-3" showAddress={false} />
                            </div> :
                            <ConnectWalletButton className="button-outline" />
                        }
                    </div>

                    <HowToHatch />
                    <RarityInfos />
                </div>

                <HatchingVideo />
                <HatchResult />


                <div id="penguinNest">
                    <h2>PENGUIN NEST</h2>
                    <HatchingInventory />
                </div>


                <div id="claim-privileges" className='container'>
                    <h2 >Claim your Emperor&apos;s privileges</h2>
                    <div className="alert alert-primary text-center" role="alert" id="join-discord-alert">
                        {/* <h4 className="alert-heading">Claim your Emperor&apos;s privileges</h4> */}
                        <br />
                        Join our discord to claim <b>your Emperor’s privileges</b> and participate in the life of the community : <br />vote for fundamental decisions and access private giveaways.<br />
                        <br />
                        Go to the « join » channel to register.<br />

                        <a href={routeNames.discord}>
                            <div className="button button-outline px-5 mt-3">Join our discord</div>
                        </a>
                    </div>
                </div>
            </div>
        </HatchContextProvider>
    );
};

export default HatchingHome;