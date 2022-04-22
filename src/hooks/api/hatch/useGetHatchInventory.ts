import { API, hatchConfig } from 'config';
import { fromNft, ItemData, ItemType } from 'structs/ItemData';
import { NFT } from 'structs/NFT';
import { useFetchWithAddress } from '../common/useFetchWithAddress';

const useGetHatchInventory = () => {

    const { output: nfts } = useFetchWithAddress(
        (addr) => API.getNfts(addr, hatchConfig.eggsIdentifier, hatchConfig.penguinsIdentifier),
        Promise.resolve([] as NFT[])
    );

    const items = nfts != undefined ? sortItems(nfts?.map(fromNft)) : undefined;


    return { items };
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