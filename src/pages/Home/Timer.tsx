import * as React from 'react';

const Timer = (props: { date: any; }) => {
    const [timeLeft, setTimeLeft] = React.useState(props.date);

    React.useEffect(() => {
        updateTime();

        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [props.date]);

    function updateTime() {
        setTimeLeft(props.date - new Date().getTime());
    }

    const padString = (num: number, size: number) => {
        let s = num + '';
        while (s.length < size) s = '0' + s;
        return s;
    };

    const getDays = () => {
        return padString(Math.floor(timeLeft / (1000 * 60 * 60 * 24)), 2);
    };

    const getHours = () => {
        return padString(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
    };

    const getMinutes = () => {
        return padString(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)), 2);
    };

    const getSeconds = () => {
        return padString(Math.floor((timeLeft % (1000 * 60)) / 1000), 2);
    };

    return (
        <div className="semiBanner time">
            {
                getDays() != '00' &&
                <div className="days">
                    <span className='time'>{getDays()}</span>
                    <span className='label'>DAYS</span>
                </div>
            }
            <div className="hours">
                <span className='time'>{getHours()}</span>
                <span className='label'>HOURS</span>
            </div>
            <div className="minutes">
                <span className='time'>{getMinutes()}</span>
                <span className='label'>MINUTES</span>
            </div>
            <div className="seconds">
                <span className='time'>{getSeconds()}</span>
                <span className='label'>SECONDS</span>
            </div>
        </div>
    );
};

export default Timer;