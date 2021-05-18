import React, {useContext, useState} from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import visaImg from '../MainVisaBlue.png'
import {ModalContext} from "../cont/ModalContext";


export default function Payment() {

    const [selected, setSelected] = useState(1);

    const {handleShowModalOne, handleClose} = useContext(ModalContext)

    return (
        <>
            <Modal.Header className="text-center">
                <Modal.Title id="heading" className="w-100 d-flex justify-content-between">
                    <div className="back" onClick={handleShowModalOne}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                             fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                        </svg>
                    </div>
                    <div>Choose Card</div>
                    <div className="closeButton" onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                             fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <div className="card" onClick={() => {
                    setSelected(1);
                }}>
                    <div className="left-card">
                        {selected === 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                 width="24px"
                                 fill="green">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                            </svg>
                        ) : (
                            ""
                        )}

                        <img src={visaImg} alt="visa" className="visaImg"/>
                    </div>
                    <div className="right-card">
                        Visa credit card ending with 2345
                    </div>
                </div>
                <div className="card" onClick={() => {
                    setSelected(2);
                }}>
                    <div className="left-card">
                        {selected === 2 ? (
                            <svg className="check" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                 width="24px"
                                 fill="green">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                            </svg>
                        ) : (
                            ""
                        )}
                        <img src={visaImg} alt="visa" className="visaImg"/>
                    </div>
                    <div className="right-card">
                        Visa credit card ending with 2345
                    </div>
                </div>

                <div className="card" onClick={() => {
                    setSelected(3);
                }}>
                    <div className="left-card">
                        +
                    </div>
                    <div className="right-card lefty">
                        Add Card
                    </div>
                </div>


                <div className="d-flex justify-content-center">
                    <Button className="pay" onClick={handleClose}>Pay</Button>
                </div>


            </Modal.Body>
        </>
    );
}