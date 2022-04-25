import React, { useContext } from 'react';
import { transactionServices } from '@elrondnetwork/dapp-core';
import { API } from 'config';
import HatchContext from 'pages/hatching/HatchContext/HatchContext';
import { ItemData, ItemType } from 'structs/ItemData';
import { sleep } from 'utils/misc';
import { getNonceFromData } from 'utils/string';
import useGetHatchInventory from './useGetHatchInventory';

export const useGetLastedHatch = () => {

    const [hatchedPenguins, setHatchedPenguins] = React.useState<ItemData[]>([]);

    const { refreshInventory } = useGetHatchInventory();
    const { hatchSessionId, hatchHash } = useContext(HatchContext);

    transactionServices.useTrackTransactionStatus({
        transactionId: hatchSessionId,
        onSuccess: async () => {

            if (hatchHash == null) {
                throw new Error('hash is null');
            }

            setHatchedPenguins([]);

            await sleep(3000);

            const nonces = await getTransferedNonces(hatchHash);
            const newItems = await refreshInventory();

            console.log(nonces);
            console.log(newItems);

            const newHatchedPenguins = newItems
                .filter(item => item.type == ItemType.Penguin && nonces.includes(item.nonce));
            setHatchedPenguins(newHatchedPenguins);
            console.log('Set hatched penguins to ', newHatchedPenguins, 'with length of', newHatchedPenguins.length);
        }
    });

    return { hatchedPenguins };
};

async function getTransferedNonces(hash: string) {
    if (hash == null) {
        throw new Error('hash is null');
    }


    const results = await API.getSmartContractResult(hash);

    const dataDecoded = results
        .map(result => Buffer.from(result.data, 'base64').toString());

    const nonces = dataDecoded
        .filter(data => data.startsWith('ESDTNFTTransfer'))
        .map(data => getNonceFromData(data));

    return nonces;
}
