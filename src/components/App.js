import React from "react";
import { Modal } from "../lib";

const App = () => {
    const [modalActive, setModalActive] = useState(false);

    const save = (e) => {
        e.preventDefault();
        setModalActive(true);
    }

    const close = (e) => {
        setModalActive(false);
    }

    return (
        <div>
            <button onClick={save}> Click here </button>
            {modalActive && (
                <Modal message={"Employee sucessfully saved !"} onClick={close} />
            )}
        </div>
    );
};

export default App