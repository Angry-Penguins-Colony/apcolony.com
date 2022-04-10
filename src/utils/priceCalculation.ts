export const ERR_PRICE_LIST_TOO_SMALL = 'The price list cannot fit nftCount inside.';

export function calculatePriceFromNft(nftCount: number, alreadyBought: number, priceList: number[]): number {

    if (nftCount + alreadyBought > priceList.length) {
        throw new Error(ERR_PRICE_LIST_TOO_SMALL);
    }

    let price = 0;

    for (let i = alreadyBought; i < alreadyBought + nftCount; i++) {

        price += priceList[i];

    }

    return price;
}