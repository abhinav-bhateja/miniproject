import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

import Project from './modal/Project'
import Visa from './modal/Visa'

import './App.css';

import {ModalContext} from "./cont/ModalContext";

function App() {

    const {modalState, handleShowModalOne, handleClose} = useContext(ModalContext)

    return (
        <div>
            <Button variant="outline-info" onClick={handleShowModalOne}>
                Show Modal One
            </Button>

            <Modal show={modalState === "modal-one"} onHide={handleClose}>
                <Project />
            </Modal>

            <Modal show={modalState === "modal-two"} onHide={handleClose}>
                <Visa />
            </Modal>
        </div>
    )
}

export default App;
