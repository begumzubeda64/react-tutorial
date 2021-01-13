import React, { useEffect, useRef } from 'react';

const App = () => {
    const useref = useRef(null);
    const btnref = useRef(null);
    const countref = useRef(0);

    useEffect(() => {
        let { current } = countref;
        current = current + 1;
        alert(current);
    });

    const focus = () => {
        useref.current.focus();
        btnref.current.setAttribute("disabled", true);
    }
    return (
        <>
            <input type="text" ref={useref} />
            <button onClick={focus} ref={btnref}>Focus</button>
        </>
    )
}

export default App;