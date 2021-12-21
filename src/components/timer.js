import React, { useRef, useEffect, useState } from "react";

export default function Countdown(props) {

    const [pause, setPause] = useState(false);
    // const [count, setCount] = useState(60);

    let intervalRef = useRef();


    //Bajamos el contador en una unidad
    const decreaseCount = () => {
        props.setCount((prev) => prev - 1);
    };

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(decreaseCount, 1000);
        }
        //cambia el estado del pause
        setPause((prev) => !prev);
    };

    //Decrementamos con intervalos de 1 segundo, se ejecuta con cada cambio del estado (en este caso, cuando se decrementa)
    //Ejemplo adaptado de la diapositiva 86 de la teoría
    useEffect(() => {
        setPause(false);
        intervalRef.current = setInterval(decreaseCount, 1000);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);


    if (props.count == 0 || props.count < 0) {
        props.end(props.count);
    }
    return (
        <div>
            <div>{props.count}</div>
            <button onClick={handleClick}>{pause ? ">" : "||"}</button>
        </div>
    );







}