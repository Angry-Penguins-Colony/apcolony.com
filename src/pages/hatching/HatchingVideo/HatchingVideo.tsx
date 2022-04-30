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

        return <div className={styles.video}>
            <div className={styles.content}>
                {
                    videoStatus == VideoStatus.Ended ?
                        <div className="d-flex flex-column">
                            <LoadingIcon className={styles.loader} />
                            <p className="mt-3">Sorry, the transaction is a bit long. We will wait until it is processed</p>
                        </div>

                        :
                        <video
                            src="/video/Eggs lumière excès.mp4"
                            autoPlay
                            playsInline
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