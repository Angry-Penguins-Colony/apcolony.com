import React from 'react';
import { useGetAccountInfo, logout } from '@elrondnetwork/dapp-core';
import { Address } from '@elrondnetwork/erdjs/out';
import { truncateAddress } from 'utils/string';
import styles from './index.module.scss';

export const DisconnectWalletButton = () => {

    const { address } = useGetAccountInfo();

    const disconnectWallet = () => {
        logout();
    };

    return <div
        className="button connectWallet danger"
        onClick={disconnectWallet}>
        DISCONNECT<br />
        <span className={styles.addressLabel}>
            {truncateAddress(Address.fromBech32(address), 10)}
        </span>
    </div>;
};