import * as React from 'react';
import styles from './videoPlayer.module.scss';

const VideoPlayer = (props: {
    videoSource: string;
    thumbnail: string;
    className?: string;
}) => {
    const videoSource = props.videoSource;
    const thumbnail = props.thumbnail;
    const className = props.className || '';
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const [isPlay, setIsPlay] = React.useState<boolean>(false);

    const playPause = () => {
        console.log('click');

        if (videoRef.current) {
            if (isPlay) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlay(!isPlay);
        }
    };

    return (
        <div className={styles.videoPlayer + ' ' + className} onClick={playPause}>
            <div className={styles.controls}>
                {
                    !isPlay &&
                    <div className={styles.playButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330.57 430.92"><path d="M322.44,241.02c-2.9,4.1-6.48,7.68-10.58,10.58L69.82,422.8c-19.96,14.11-47.59,9.38-61.7-10.58-5.29-7.48-8.12-16.4-8.12-25.56V44.26C0,19.82,19.82,0,44.26,0c9.16,0,18.08,2.84,25.56,8.12l242.04,171.2c19.96,14.12,24.69,41.75,10.58,61.7Z" /></svg>
                    </div>
                }
            </div>
            <video ref={videoRef} poster={thumbnail}>

                <source src={videoSource} type="video/mp4" />

                {'Sorry, your browser doesn_\'t support embedded videos.'}
            </video>
        </div>
    );
};

export default VideoPlayer;