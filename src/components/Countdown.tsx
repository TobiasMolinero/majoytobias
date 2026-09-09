import { useEffect, useState } from "react";

type TimeRemaining = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const weddingDate = new Date("2026-11-27T13:15:00");

const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
};


export const Countdown = () => {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
        calculateTimeRemaining()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return( 
        <>
            <TimeUnit value={timeRemaining.days} label="DÍAS"/>
            <TimeUnit value={timeRemaining.hours} label="HORAS"/>
            <TimeUnit value={timeRemaining.minutes} label="MINUTOS"/>
            <TimeUnit value={timeRemaining.seconds} label="SEGUNDOS"/>
        </>
    )
}

type TimeUnitProps = {
    value: number;
    label: string;
};

const TimeUnit = ({ value, label }: TimeUnitProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-4">
            <span className="font-small-caps text-charcoal text-4xl lg:text-6xl">
                {String(value).padStart(2, "0")}
            </span>
            <span className="font-body text-petroleum text-xs tracking-[0.2rem]">
                {label}
            </span>
        </div>
    );
};