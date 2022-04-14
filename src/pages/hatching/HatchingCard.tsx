import * as React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollContainer from 'react-indiana-drag-scroll';
import styles from './hatchingCard.module.scss';

const HatchingCard = (props: {
    bySelection?: boolean,
}) => {
    const bySelection = props.bySelection || false;

    const [itemData, setItemData] = React.useState<({
        type: string;
        title: string;
        thumbail: string;
        tier: number;
        id: string;
    } | {
        type: string;
        thumbail: string;
        id: string;
        title?: undefined;
        tier?: undefined;
    })[]>([]);

    // function when selection is change
    const [selectedItems, setSelectedItems] = React.useState<({
        type: string;
        title: string;
        thumbail: string;
        tier: number;
        id: string;
    } | {
        type: string;
        thumbail: string;
        id: string;
        title?: undefined;
        tier?: undefined;
    })[]>([]);

    const changeSelection = (itemId: string) => {
        console.log('change selection');
        console.log(itemId);
        // get item in all items
        console.log(itemData);

        const item = itemData.find(aItem => aItem.id === itemId);
        console.log('item', item);


        if (item) {
            if (!bySelection) {
                setSelectedItems([item]);
            } else {
                // if item is not in selected items
                if (!selectedItems.find(aItem => aItem.id === itemId)) {
                    // add item to selected items
                    setSelectedItems([...selectedItems, item]);
                } else {
                    // remove item from selected items
                    setSelectedItems(selectedItems.filter(aItem => aItem.id !== itemId));
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
    const [eggsHatch, setEggsHatch] = React.useState<{
        id: string,
        type: string,
        title: string,
        thumbail: string
    }[]>([]);

    const startHatching = () => {
        console.log('start hatching');

        // display video and auto play
        setVideoIsDisplay(true);

        // TODO: hatch egg
        setTimeout(() => {
            setEggsHatch([
                {
                    id: '1',
                    type: 'penguin',
                    title: 'Angry Pinguin #0550',
                    thumbail: '/img/penguins/Untitled design-2.png',
                },
                {
                    id: '2',
                    type: 'penguin',
                    title: 'Angry Pinguin #8745',
                    thumbail: '/img/penguins/Untitled design-3.png',
                },
                {
                    id: '3',
                    type: 'penguin',
                    title: 'Angry Pinguin #8272',
                    thumbail: '/img/penguins/Untitled design-5.png',
                },
                {
                    id: '4',
                    type: 'penguin',
                    title: 'Angry Pinguin #2887',
                    thumbail: '/img/penguins/Untitled design-7.png',
                }
            ]);
        }, 3500);
    };

    // get all item card by API
    React.useEffect(() => {
        if (bySelection) { // get just egg
            setTimeout(() => {
                // marketplaceAPI.getMyItem(10).then(data => { // TODO: all item card (change setTimout by good API call)
                const data = [
                    {
                        type: 'egg',
                        title: 'Tier 1 Egg',
                        thumbail: '/img/eggs/Silver_egg.png',
                        tier: 1,
                        id: '8745',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 1 Egg',
                        thumbail: '/img/eggs/Silver_egg.png',
                        tier: 1,
                        id: '2783',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 1 Egg',
                        thumbail: '/img/eggs/Silver_egg.png',
                        tier: 1,
                        id: '387451',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 2 Egg',
                        thumbail: '/img/eggs/Gold_egg.png',
                        tier: 1,
                        id: '7',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 2 Egg',
                        thumbail: '/img/eggs/Gold_egg.png',
                        tier: 1,
                        id: '8754245',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 3 Egg',
                        thumbail: '/img/eggs/Diamond_egg.png',
                        tier: 1,
                        id: '574',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 3 Egg',
                        thumbail: '/img/eggs/Diamond_egg.png',
                        tier: 1,
                        id: '7461',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 3 Egg',
                        thumbail: '/img/eggs/Diamond_egg.png',
                        tier: 1,
                        id: '8741',
                    }
                ]; // TODO: this is a temp data they will be replace by API call

                setItemData(data);

                if (!bySelection) {
                    setSelectedItems([data[0]]);
                }

                // });
            }, 1);
        } else { // get egg and penguin (maybe item too ?)
            // marketplaceAPI.getMyItem(10).then(data => { // TODO: all item card (change setTimout by good API call)
            setTimeout(() => {
                const data = [
                    {
                        type: 'egg',
                        title: 'Tier 1 Egg',
                        thumbail: '/img/eggs/Silver_egg.png',
                        tier: 1,
                        id: '8745',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 1 Egg',
                        thumbail: '/img/eggs/Silver_egg.png',
                        tier: 1,
                        id: '2783',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 1 Egg',
                        thumbail: '/img/eggs/Silver_egg.png',
                        tier: 1,
                        id: '387451',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 2 Egg',
                        thumbail: '/img/eggs/Gold_egg.png',
                        tier: 1,
                        id: '7',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 2 Egg',
                        thumbail: '/img/eggs/Gold_egg.png',
                        tier: 1,
                        id: '8754245',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 3 Egg',
                        thumbail: '/img/eggs/Diamond_egg.png',
                        tier: 1,
                        id: '574',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 3 Egg',
                        thumbail: '/img/eggs/Diamond_egg.png',
                        tier: 1,
                        id: '7461',
                    },
                    {
                        type: 'egg',
                        title: 'Tier 3 Egg',
                        thumbail: '/img/eggs/Diamond_egg.png',
                        tier: 1,
                        id: '8741',
                    },
                    {
                        type: 'penguin',
                        thumbail: '/img/penguins/Untitled design-2.png',
                        id: '17',
                    },
                    {
                        type: 'penguin',
                        thumbail: '/img/penguins/Untitled design-3.png',
                        id: '57',
                    },
                    {
                        type: 'penguin',
                        thumbail: '/img/penguins/Untitled design-4.png',
                        id: '872',
                    },
                    {
                        type: 'penguin',
                        thumbail: '/img/penguins/Untitled design-5.png',
                        id: '8767825734',
                    },
                    {
                        type: 'penguin',
                        thumbail: '/img/penguins/Untitled design-6.png',
                        id: '387',
                    },
                    {
                        type: 'penguin',
                        thumbail: '/img/penguins/Untitled design-7.png',
                        id: '8753',
                    },
                    {
                        type: 'penguin',
                        thumbail: '/img/penguins/Untitled design-8.png',
                        id: '558758785',
                    }
                ]; // TODO: this is a temp data they will be replace by API call

                setItemData(data);

                if (!bySelection) {
                    setSelectedItems([data[0]]);
                }

                // });
            }, 1);
        }
    }, []);


    // create item cards
    const itemCards: JSX.Element[] = [];
    for (const item of itemData) {
        let isSelected = false;
        const sameSlectedItem = selectedItems.find(aItem => aItem.id === item.id);
        if (sameSlectedItem) {
            isSelected = true;
        }

        itemCards.push(
            <ItemCard itemId={item.id.toString()} key={item.id.toString()} item={item} changeSelection={changeSelection} isSelected={isSelected} />
        );
    }

    // create item selection cards
    const itemSelectionCards: JSX.Element[] = [];
    for (const item of selectedItems) {
        itemSelectionCards.push(
            <ItemSelectedCard itemId={item.id.toString()} key={item.id.toString()} item={item} />
        );
    }

    // TODO: add selection option

    return (
        <div className={'hatchingCard container ' + styles.hatchingCard + (bySelection ? ' ' + styles.bySelection : '')}>
            <div className={styles.yourInventory}>
                <h3>YOUR INVENTORY</h3>
                {
                    bySelection &&
                    <p className={styles.subTitle}>Select 1 or more eggs hatch</p>
                }

                <ScrollContainer horizontal={false} hideScrollbars={false} className={styles.items}>
                    {itemCards}
                </ScrollContainer>
            </div>
            <div className={styles.infos}>
                {
                    (selectedItems.length == 1 || !bySelection) ?
                        <h3>INFOS</h3>
                        :
                        <h3>SELECTED EGGS</h3>
                }
                <div className={styles.content}>
                    {
                        (selectedItems.length == 1) ?
                            (selectedItems[0].type == 'egg') ?
                                <>
                                    <img src={selectedItems[0].thumbail} className={styles.egg} />
                                    <h4>{selectedItems[0].title}</h4>
                                    <p>This is a tier {selectedItems[0].tier} egg, you can see it by is bronze halo on it</p>
                                    {/* TODO: add good description */}
                                    <div className='button' onClick={startHatching}>HATCH THIS EGG</div>
                                </>
                                :
                                <>
                                    <img src={selectedItems[0].thumbail} className={styles.egg} />
                                    <h4>Penguin</h4>
                                    {/* TODO: add good NFT name */}
                                    <p>This is a Angry Penguin NFT</p>
                                    {/* TODO: add good NFT description */}
                                    <div className='button'>SEE THIS NFT</div>
                                    {/* TODO: bind button */}
                                </>
                            :
                            (selectedItems.length == 0) ?
                                <>
                                    <p>No eggs selected</p>
                                    {/* TODO: */}
                                </>
                                :
                                <>
                                    <div className={styles.selectedEggs}>
                                        {itemSelectionCards}
                                    </div>
                                </>
                    }
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
                </div>
                {
                    (selectedItems.length > 1) &&
                    <div className={styles.actions}>
                        <div className={styles.button + ' button'} onClick={handleConfirmSelection}>CONFIRM SELECTION</div>
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
                        <div className={styles.result}>
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
                        </div>
                        <div className={'button ' + styles.button} onClick={() => { location.reload(); }}>RETURN TO SITE</div>
                    </div>
                </div>
            }
        </div>
    );
};

export default HatchingCard;

const ItemCard = (props: {
    item: any,
    itemId: string,
    isSelected?: boolean,
    changeSelection: (itemId: string) => void,
}) => {
    const data = props.item;

    const isSelected = props.isSelected;
    // const [isSelected, setIsSelected] = React.useState(props.isSelected || false);

    const handleClick = () => {
        // setIsSelected(!isSelected);
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