import { API, hatchConfig } from 'config';
import { fromNft, ItemData, ItemType } from 'structs/ItemData';
import { NFT } from 'structs/NFT';
import { useFetchWithAddress } from '../common/useFetchWithAddress';

const useGetHatchInventory = () => {

    const { output: nfts, refresh } = useFetchWithAddress(
        (addr) => API.getNfts(addr, hatchConfig.eggsIdentifier, hatchConfig.penguinsIdentifier),
        Promise.resolve([] as NFT[])
    );

    const items = nfts != undefined ? sortItems(nfts?.flatMap(fromNft)) : undefined;


    return {
        items, refreshInventory: () => {
            API.clearCache();
            refresh();
        }
    };
};

export default useGetHatchInventory;

function sortItems(items: ItemData[]) {
    return items.sort((a, b) => {
        if (a.type === ItemType.Penguin) {
            return -1;
        } else if (b.type === ItemType.Egg) {
            return 1;
        } else {
            return 0;
        }
    });
}