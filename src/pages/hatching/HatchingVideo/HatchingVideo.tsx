import React, { useContext } from 'react';
import LoadingIcon from 'components/LoadingIcon/LoadingIcon';
import { HatchStatus } from 'structs/HatchStatus';
import HatchContext from '../HatchContext/HatchContext';
import styles from './HatchingVideo.module.scss';

enum VideoStatus {
    None,
    Playing,
    Ended
}

const HatchingVideo = () => {

    const { hatchStatus: status, setHatchingVideoAsEnded } = useContext(HatchContext);

    const [videoStatus, setVideoStatus] = React.useState<VideoStatus>(VideoStatus.None);

    if (status == HatchStatus.Hatching || videoStatus == VideoStatus.Playing) {

        console.log('Showing video');
        return <div className={styles.video}>
            <div className={styles.content}>
                {
                    videoStatus == VideoStatus.Ended ?
                        <LoadingIcon className={styles.loader} />
                        :
                        <video
                            src="/video/Eggs lumière excès.mp4"
                            autoPlay
                            muted
                            onPlay={() => setVideoStatus(VideoStatus.Playing)}
                            onEnded={() => setVideoAsEnded()}
                        />
                }
                {status == HatchStatus.Hatched &&
                    <p className={styles.skipVideo} role="button" onClick={() => setVideoAsEnded()}>Skip video</p>
                }
            </div>
        </div>;
    }
    else {
        return <></>;
    }

    function setVideoAsEnded() {
        setHatchingVideoAsEnded();
        setVideoStatus(VideoStatus.Ended);
    }
};

export default HatchingVideo;