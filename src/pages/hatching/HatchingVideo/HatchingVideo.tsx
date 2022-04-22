import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HatchStatus, useGetHatchStatus } from 'hooks/api/hatch/useGetHatchStatus';
import styles from './HatchingVideo.module.scss';

enum VideoStatus {
    None,
    Playing,
    Ended
}

const HatchingVideo = () => {

    const status = useGetHatchStatus();

    const refVideoEgglight = React.useRef<HTMLVideoElement>(null);
    const [videoStatus, setVideoStatus] = React.useState<VideoStatus>(VideoStatus.None);

    if (status == HatchStatus.Hatching || videoStatus == VideoStatus.Playing) {

        console.log('Showing video');
        return <div className={styles.video}>
            <div className={styles.content}>
                {
                    videoStatus ?
                        <FontAwesomeIcon icon={faCircleNotch} spin size='3x' className={styles.loader} />
                        :
                        <video src="/video/Eggs lumière excès.mp4" ref={refVideoEgglight} autoPlay
                            onPlay={() => setVideoStatus(VideoStatus.Playing)}
                            onEnded={() => { setVideoStatus(VideoStatus.Ended); }}></video>
                }
                {status == HatchStatus.Hatched &&
                    <p className={styles.skipVideo} role="button" onClick={() => setVideoStatus(VideoStatus.Ended)}>Skip video</p>
                }
            </div>
        </div>;
    }
    else {
        return <></>;
    }
};

export default HatchingVideo;