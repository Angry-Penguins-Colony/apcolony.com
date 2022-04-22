import { API, hatchConfig } from 'config';
import { fromNft, ItemData, ItemType } from 'structs/ItemData';
import { useFetchWithAddress } from '../common/useFetchWithAddress';

const useGetHatchInventory = () => {

    const { output, refresh } = useFetchWithAddress(
        async (addr) => {
            const nfts = await API.getNfts(addr, hatchConfig.eggsIdentifier, hatchConfig.penguinsIdentifier);

            const items = nfts
                .flatMap(nft => fromNft(nft));

            return sortItems(items);
        },
        Promise.resolve([] as ItemData[])
    );

    return {
        items: output, refreshInventory: () => {
            API.clearCache();
            return refresh();
        }
    };
};

export default useGetHatchInventory;

function sortItems(items: ItemData[]) {
    return items.sort((a) => {
        if (a.type === ItemType.Penguin) {
            return 1;
        } else if (a.type === ItemType.Egg) {
            return -1;
        } else {
            return 0;
        }
    });
}