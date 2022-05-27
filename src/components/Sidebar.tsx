import {useState} from "react";

const Sidebar = () => {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleState = () => setState(prev => ({...prev,top: !prev.top}))
    return (
        <>
            <div>{state.top ? 'Открыто' : 'Закрыто'}</div>
            <button onClick={toggleState}>das</button>
        </>
    )
};


export default Sidebar;
