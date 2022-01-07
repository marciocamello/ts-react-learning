import { useCallback, useEffect, useRef, useState } from "react";

export const MustableRef = () => {
    const [timer, setTimer] = useState(0);
    const [buttonStatus, setButtonStatus] = useState(false);
    const interValRef = useRef<number | null>(null);

    const stopTimer = useCallback(() => {
        if (interValRef.current) {
            setButtonStatus(true);
            window.clearInterval(interValRef.current);
        }
    }, []);

    const startTimer = useCallback(() => {
        stopTimer();
        setButtonStatus(false);
        interValRef.current = window.setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);
    }, [stopTimer]);

    useEffect(() => {
        startTimer();

        return () => {
            stopTimer();
        }
    }, [startTimer, stopTimer]);

    return (
        <div>
            HookTimer - {timer} -
            <button onClick={() => buttonStatus ? startTimer() : stopTimer()}>{buttonStatus ? 'Start Timer' : 'Stop Timer'}</button>
        </div>
    );
};