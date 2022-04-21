import * as React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollContainer from 'react-indiana-drag-scroll';
import useGetInventory from 'hooks/api/hatch/useGetInventory';
import { useGetLastedHatch } from 'hooks/api/hatch/useGetLastedHatch';
import { ItemData } from '../../structs/ItemData';
import styles from './HatchingInventory.module.scss';


const HatchingInventory = (props: {
    canMultiSelect?: boolean,
}) => {
    const canMultiSelect = props.canMultiSelect || true;

    const { items } = useGetInventory();

    // function when selection is change
    const [selectedItems, setSelectedItems] = React.useState<ItemData[]>([]);

    const isSelected = (itemId: string) => {
        return selectedItems.find((item) => item.id.toString() === itemId);
    };

    const changeSelection = (itemId: string) => {
        const item = items.find(aItem => aItem.id === itemId);

        if (item) {
            if (!canMultiSelect) {
                setSelectedItems([item]);
            } else {
                if (item.type === 'penguin') {
                    if (isSelected(itemId)) {
                        setSelectedItems([]);
                    }
                    else {
                        setSelectedItems([item]);
                    }
                } else {
                    // remove selected penguin
                    const newSelectedItems = selectedItems.filter(aItem => aItem.type !== 'penguin');

                    // if item is not in selected items
                    if (!newSelectedItems.find(aItem => aItem.id === itemId)) {
                        // add item to selected items
                        setSelectedItems([...newSelectedItems, item]);
                    } else {
                        // remove item from selected items
                        setSelectedItems(newSelectedItems.filter(aItem => aItem.id !== itemId));
                    }
                }
            }
        }
    };

    const [confirmSelection, setConfirmSelection] = React.useState<boolean>(false);
    const handleConfirmSelection = () => {
        setConfirmSelection(!confirmSelection);
    };

    const refVideoEgglight = React.useRef<HTMLVideoElement>(null);
    const [videoIsDisplay, setVideoIsDisplay] = React.useState<boolean>(false);
    const [videoIsEnded, setVideoIsEnded] = React.useState<boolean>(false);
    const eggsHatch = useGetLastedHatch();

    const startHatching = () => {
        setVideoIsDisplay(true);

        // TODO: send transaction
    };

    return (
        <div className={'hatchingCard container ' + styles.hatchingCard + (canMultiSelect ? ' ' + styles.bySelection : '') + (selectedItems.length == 1 ? ' ' + styles.haveInfos : '')}>
            <div className={styles.yourInventory + (confirmSelection ? ' ' + styles.confirmSelection : '')}>
                <h3>YOUR INVENTORY</h3>
                {
                    canMultiSelect &&
                    <p className={styles.subTitle}>Select 1 or more eggs hatch</p>
                }

                <ScrollContainer horizontal={false} hideScrollbars={false} className={styles.items}>
                    {getItemsCards()}
                </ScrollContainer>
            </div>
            <div className={styles.infos}>

                <h3>INFOS</h3>

                <div className={styles.content}>
                    {getInfo()}
                </div>
                {
                    confirmSelection &&
                    <div className={styles.confirmSelection}>
                        <p>{'YOU\'RE ABOUT '}<br />{'TO HATCH ' + selectedItems.length + ' EGGS !'}</p>
                        <div className={styles.actions}>
                            <div className={'button ' + styles.button} onClick={startHatching}>HATCH NOW</div>
                            <div className={'button button-cancel ' + styles.button} onClick={handleConfirmSelection}>CANCEL</div>
                        </div>
                    </div>
                }
                {
                    (selectedItems.length > 1) &&
                    <div className={styles.actions}>
                        <div className={styles.button + ' button'} onClick={handleConfirmSelection}>CONFIRM HATCH</div>
                        <div className={styles.button + ' button button-cancel'} onClick={() => { setSelectedItems([]); }}>CANCEL</div>
                    </div>
                }
            </div>
            {
                videoIsDisplay &&
                <div className={styles.video}>
                    <div className={styles.content}>
                        {
                            videoIsEnded ?
                                <FontAwesomeIcon icon={faCircleNotch} spin size='3x' className={styles.loader} />
                                :
                                <video src="/video/Eggs lumière excès.mp4" ref={refVideoEgglight} autoPlay onEnded={() => { setVideoIsEnded(true); }}></video>
                        }
                        <p className={styles.skipVideo} role="button" onClick={() => setVideoIsEnded(true)}>Skip video</p>
                    </div>
                </div>
            }
            {
                // display result of hatch
                videoIsEnded && eggsHatch.length > 0 &&
                <div className={styles.hatchResult}>
                    <header className='container'>
                        <a href="/" className='logo'>
                            <img src="/img/APC_LOGO_BLUE_WHITE.svg" alt="Angry Penguins Logo" />
                        </a>
                        <div className={styles.info}>
                            <div className="button" onClick={() => { location.reload(); }}>RETURN TO SITE</div>
                            <div className="numberOfEgg">
                                {/* TODO: add comonent (same to nav bar) */}
                            </div>
                        </div>
                    </header>
                    <div className={styles.content + ' ' + styles.container}>
                        <h1>HATCHING SUCCESSFUL !</h1>
                        <p className={styles.subTtile}>Discover your Angry Penguin(s)<br /> in the Penguin Nest below!</p>
                        <ScrollContainer vertical={false} hideScrollbars={false} className={styles.result}>
                            {
                                eggsHatch.map((eggResult, index) => {
                                    return (
                                        <div key={index} className={styles.eggResult}>
                                            <img src={eggResult.thumbail} />
                                            <p className={styles.title} >{eggResult.title}</p>
                                        </div>
                                    );
                                })
                            }
                        </ScrollContainer>
                        <div className={'button ' + styles.button} onClick={() => { location.reload(); }}>RETURN TO SITE</div>
                    </div>
                </div>
            }
        </div >
    );

    function getInfo(): JSX.Element {

        if (selectedItems.length == 0) {
            return <>
                <p>Select an egg to hatch it</p>
            </>;
        }
        else if (selectedItems.length == 1) {
            switch (selectedItems[0].type) {
                case 'egg':
                    return <>
                        <img src={selectedItems[0].thumbail} className={styles.egg} />
                        <h4>{selectedItems[0].title}</h4>
                        <p>This is a tier {selectedItems[0].tier} egg, you can see it by is bronze halo on it</p>
                        {/* TODO: add good description */}
                        <div className='button' onClick={startHatching}>HATCH THIS EGG</div>
                    </>;

                case 'penguin':
                    return <>
                        <img src={selectedItems[0].thumbail} className={styles.egg} />
                        <h4>Penguin</h4>
                        {/* TODO: add good NFT name */}
                        <p>{selectedItems[0].description}</p>
                        {/* TODO: add good NFT description */}
                        <div className='button'>SEE THIS NFT</div>
                        {/* TODO: bind button */}
                    </>;

                default:
                    throw new Error('Unknown type');
            }
        }
        else {
            return <>
                <ScrollContainer horizontal={false} hideScrollbars={false} className={styles.selectedEggs}>
                    {getSelectionCards()}
                </ScrollContainer>
            </>;
        }
    }

    function getItemsCards(): JSX.Element[] {
        const itemsCards: JSX.Element[] = [];
        for (const item of items) {
            let isSelected = false;
            const sameSlectedItem = selectedItems.find(aItem => aItem.id === item.id);
            if (sameSlectedItem) {
                isSelected = true;
            }

            itemsCards.push(
                <ItemCard itemId={item.id.toString()} key={item.id.toString()} item={item} changeSelection={changeSelection} isSelected={isSelected} />
            );
        }

        return itemsCards;
    }

    function getSelectionCards(): JSX.Element[] {
        const itemSelectionCards: JSX.Element[] = [];

        for (const item of selectedItems) {
            itemSelectionCards.push(
                <ItemSelectedCard itemId={item.id.toString()} key={item.id.toString()} item={item} />
            );
        }

        return itemSelectionCards;
    }
};

export default HatchingInventory;

const ItemCard = (props: {
    item: any,
    itemId: string,
    isSelected?: boolean,
    changeSelection: (itemId: string) => void,
}) => {
    const data = props.item;

    const isSelected = props.isSelected;
    const handleClick = () => {
        props.changeSelection(props.itemId);
    };

    return (
        <>
            <div className={styles[data.type] + (isSelected ? ' ' + styles.selected : '')} onClick={handleClick}>
                <img src={data.thumbail} />
            </div>
        </>
    );
};


const ItemSelectedCard = (props: {
    item: any,
    itemId: string,
}) => {
    const data = props.item;

    return (
        <>
            <div className={styles[data.type]}>
                <img src={data.thumbail} />
            </div>
        </>
    );
};