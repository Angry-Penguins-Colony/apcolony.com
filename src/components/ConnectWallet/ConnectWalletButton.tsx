import React from 'react';
import Popup from 'pages/Home/Popup';
import UnlockPage from 'pages/UnlockPage';

export const ConnectWalletButton = (props: {
    className?: string
}) => {

    const [connectWalletOpen, setConnectWalletOpen] = React.useState(false);
    const connectWallet = () => {
        setConnectWalletOpen(true);
    };

    return <>
        <Popup backdrop position="center" isOpen={connectWalletOpen} onClose={() => setConnectWalletOpen(false)}>
            <UnlockPage />
        </Popup>

        <div className={'button connectWallet' + ' ' + props.className || ''} onClick={connectWallet}>CONNECT WALLET</div>
    </>;
};