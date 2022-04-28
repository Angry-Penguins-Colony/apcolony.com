import React, { useContext } from 'react';
import { transactionServices } from '@elrondnetwork/dapp-core';
import ScrollContainer from 'react-indiana-drag-scroll';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import { useGetLastedHatch } from 'hooks/api/hatch/useGetLastedHatch';
import { HatchStatus } from 'structs/HatchStatus';
import HatchContext from '../HatchContext/HatchContext';
import styles from './HatchResult.module.scss';

const HatchResult = () => {
    const { hatchStatus: status, isHatchingVideoEnded, hatchSessionId } = useContext(HatchContext);
    const { hatchedPenguins } = useGetLastedHatch();

    const transactionStatus = transactionServices.useTrackTransactionStatus({
        transactionId: hatchSessionId,
    });


    if (status == HatchStatus.Hatched && isHatchingVideoEnded == true) {

        return <div className={styles.hatchResult}>

            <header className='container'>
                <a href="/" className='logo'>
                    <img src="/img/APC_LOGO_BLUE_WHITE.svg" alt="Angry Penguins Logo" />
                </a>
                <div className={styles.info}>
                    <div className="button" onClick={returnToSite}>RETURN TO SITE</div>
                    <div className="numberOfEgg">
                        {/* TODO: add comonent (same to nav bar) */}
                    </div>
                </div>
            </header>
            <div className={styles.content + ' ' + styles.container}>
                <h1>HATCHING SUCCESSFUL !</h1>

                {getHatchedPenguinsComponents()}

            </div>
        </div>;
    }
    else {
        return <></>;
    }

    function getHatchedPenguinsComponents() {

        if (hatchedPenguins.length == 0) {
            return <>
                <LoadingIcon className={styles.loaderIcon} />
                <p className={styles.loaderText}>{getLoadingText()}</p>
            </>;
        }
        else {
            return <>
                <p className={styles.subTtile}>Discover your Angry Penguin(s)<br /> in the Penguin Nest below!</p>
                <ScrollContainer vertical={false} hideScrollbars={false} className={styles.result}>
                    {
                        hatchedPenguins.map((eggResult, index) => {
                            return (
                                <div key={index} className={styles.eggResult}>
                                    <img src={eggResult.thumbnail} />
                                    <p className={styles.title} >{eggResult.title}</p>
                                </div>
                            );
                        })
                    }
                </ScrollContainer>
                <div className={'button ' + styles.button} onClick={returnToSite}>RETURN TO SITE</div>
            </>;
        }
    }

    function getLoadingText() {
        if (transactionStatus.isSuccessful && !transactionStatus.isPending) {
            return 'Your penguin is getting out of its eggs. It can take up to one minute.';
        }
        else {
            return 'Waiting for the transaction to be processed.';
        }
    }

    function returnToSite() {
        location.reload();
    }
};

export default HatchResult;