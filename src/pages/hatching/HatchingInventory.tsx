import * as React from 'react';
import { useGetAccountInfo, useGetLoginInfo, useGetNetworkConfig } from '@elrondnetwork/dapp-core';
import { Address } from '@elrondnetwork/erdjs/out';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link } from 'react-router-dom';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import { hatchConfig } from 'config';
import useGetHatchInventory from 'hooks/api/hatch/useGetHatchInventory';
import { useGetHatchStatus } from 'hooks/api/hatch/useGetHatchStatus';
import { EggTier } from 'structs/EggTier';
import hatch from 'transactions/hatch';
import { numberToHex } from 'utils/convert';
import { sleep } from 'utils/misc';
import { truncateAddress } from 'utils/string';
import { ItemData, ItemType } from '../../structs/ItemData';
import HatchContext from './HatchContext/HatchContext';
import styles from './HatchingInventory.module.scss';

const HatchingInventory = (props: {
    canMultiSelect?: boolean,
}) => {
    const canMultiSelect = props.canMultiSelect || true;

    const { network } = useGetNetworkConfig();

    const { address } = useGetAccountInfo();
    const { isLoggedIn } = useGetLoginInfo();
    const { items, refreshInventory } = useGetHatchInventory();
    const { setHatchSessionId } = React.useContext(HatchContext);

    // function when selection is change
    const [selectedItems, setSelectedItems] = React.useState<ItemData[]>([]);

    const isSelected = (itemId: string) => {

        return selectedItems
            .find((item) => item.id == itemId) != undefined;
    };

    const changeSelection = (itemId: string) => {



        if (items == undefined) {
            throw new Error('Cannot change selection. The items are not laoded.');
        }

        const item = items.find(aItem => aItem.id === itemId);

        if (item) {
            if (!canMultiSelect) {
                setSelectedItems([item]);
            } else {
                if (item.type === ItemType.Penguin) {
                    if (isSelected(itemId)) {
                        setSelectedItems([]);
                    }
                    else {
                        setSelectedItems([item]);
                    }
                } else {
                    // remove selected penguin
                    const newSelectedItems = selectedItems.filter(aItem => aItem.type !== ItemType.Penguin);

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

    useGetHatchStatus({
        onHatched: () => {
            sleep(10000)
                .then(() => refreshInventory());
        }
    });

    const startHatching = () => {
        const eggsToHatch = getSelectedEggsToHatch(selectedItems);
        hatch(eggsToHatch).then((sessionId) => setHatchSessionId(sessionId));
    };

    return (
        <div className={'hatchingCard container ' + styles.hatchingCard + (canMultiSelect ? ' ' + styles.bySelection : '') + (selectedItems.length == 1 ? ' ' + styles.haveInfos : '')}>
            <div className={styles.yourInventory + (confirmSelection ? ' ' + styles.confirmSelection : '')}>
                <h3>YOUR INVENTORY</h3>
                {getItemsCards()}

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
                case ItemType.Egg:
                    return <>
                        <img src={selectedItems[0].thumbnail} className={styles.egg} />
                        <h4>{selectedItems[0].title}</h4>
                        <p>{selectedItems[0].description}</p>
                        {/* TODO: add good description */}
                        <div className='button' onClick={startHatching}>HATCH THIS EGG</div>
                    </>;

                case ItemType.Penguin:

                    const explorerLink = network.explorerAddress + '/nfts/' + hatchConfig.penguinsIdentifier + '-' + numberToHex(selectedItems[0].nonce);

                    return <>
                        <img src={selectedItems[0].thumbnail} className={styles.egg} />
                        <h4>{selectedItems[0].title}</h4>
                        <p>{selectedItems[0].description}</p>
                        <a
                            href={explorerLink}
                            target="_blank" rel="noopener noreferrer">
                            <div className='button'>
                                OPEN EXPLORER
                            </div>
                        </a>
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

    function getItemsCards(): JSX.Element | JSX.Element[] {

        if (isLoggedIn == false) {
            return <ConnectWalletButton className={styles.centeredInfo} />;
        }

        if (items == undefined) {
            return <LoadingIcon className={styles.centeredInfo} />;
        }
        else if (items.length == 0) {
            return <p className={styles.centeredInfo}>
                Sorry, you don&apos;t have any egg or penguin. <br />
                <br />
                You are connect with <b>{truncateAddress(new Address(address), 15)}</b>. Maybe this is the wrong wallet?<br />

            </p>;
        }
        else {

            const itemsCards: JSX.Element[] = [];

            for (const item of items) {

                itemsCards.push(
                    <ItemCard
                        itemId={item.id}
                        key={item.id}
                        item={item}
                        changeSelection={changeSelection}
                        isSelected={isSelected(item.id)}
                    />
                );
            }

            return <>
                <p className={styles.subTitle}>Select 1 or more eggs hatch</p>
                <ScrollContainer horizontal={false} hideScrollbars={false} className={styles.items}>
                    {itemsCards}
                </ScrollContainer>
            </>;
        }
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
    item: ItemData,
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
                <img src={data.thumbnail} />
            </div>
        </>
    );
};


const ItemSelectedCard = (props: {
    item: ItemData,
    itemId: string,
}) => {
    const data = props.item;

    return (
        <>
            <div className={styles[data.type]}>
                <img src={data.thumbnail} />
            </div>
        </>
    );
};

function getSelectedEggsToHatch(selectedItems: ItemData[]) {
    if (selectedItems.length == 0) {
        throw new Error('Cannot hatch, because no item selected');
    }

    if (selectedItems.some(item => item.type === ItemType.Penguin)) {
        throw new Error('Cannot hatch a penguin');
    }

    const eggsToHatch = new Map<EggTier, number>();
    selectedItems.forEach(item => {

        if (!item.tier) {
            throw new Error('Cannot hatch an egg without tier');
        }

        const currentValue = eggsToHatch.get(item.tier) || 0;
        eggsToHatch.set(item.tier, currentValue + 1);
    });
    return eggsToHatch;
}
