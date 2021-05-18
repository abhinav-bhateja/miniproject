import {useState, createContext} from "react";

export const ModalContext = createContext(false);

function ModalProvider(props) {
    const [modalState, setModalState] = useState("close")

    const handleShowModalOne = () => {
        setModalState("modal-one")
    }

    const handleShowModalTwo = () => {
        setModalState("modal-two")
    }

    const handleClose = () => {
        setModalState("close")
    }

    return <ModalContext.Provider value={{
        modalState,
        handleShowModalOne,
        handleShowModalTwo,
        handleClose
    }}> {props.children} </ModalContext.Provider>
}

export default ModalProvider;
