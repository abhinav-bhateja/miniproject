import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

import {Formik, Field, Form as FormikForm} from "formik";

export default function Project(props) {
    return (
        <Modal {...props} centered>

            <Modal.Header closeButton className="text-center">
                <Modal.Title id="heading" className="w-100">
                    Add Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="inModal">

                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}