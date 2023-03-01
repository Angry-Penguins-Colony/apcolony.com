import React from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks';
import { logout } from '@multiversx/sdk-dapp/utils';
import { truncateAddress } from 'utils/string';
import styles from './index.module.scss';

export const DisconnectWalletButton = (props: {
    className?: string,
    showAddress?: boolean
}) => {

    const showAddress = props.showAddress ?? true;

    const { address } = useGetAccountInfo();
    console.log(address);

    const disconnectWallet = () => {
        logout();
    };

    return <div
        className={'button connectWallet danger' + ' ' + props.className}
        onClick={disconnectWallet}>
        DISCONNECT<br />

        {showAddress &&
            <span className={styles.addressLabel}>
                {truncateAddress(Address.fromBech32(address), 10)}
            </span>
        }
    </div>;
};