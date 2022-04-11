export const ERR_PRICE_LIST_TOO_SMALL = 'The price list cannot fit nftCount inside.';

export function calculatePriceFromNft(nftCount: number, alreadyBought: number, priceList: number[]): number {

    if (nftCount + alreadyBought > priceList.length) {
        throw new Error(ERR_PRICE_LIST_TOO_SMALL);
    }

    return priceList[nftCount + alreadyBought - 1] * nftCount;
}