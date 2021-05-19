import React, {useContext} from 'react';
import {Form as FormikForm, Field, Formik} from "formik";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {ModalContext} from "../cont/ModalContext";
import {postData} from "../request/request";

function Project() {
    const {handleShowModalTwo} = useContext(ModalContext)
    return (
        <>
            <Modal.Header closeButton className="text-center">
                <Modal.Title id="heading" className="w-100">
                    Create Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik

                    initialValues={{
                        name: '',
                        summary: '',
                        date: '',
                        cost: ''
                    }}

                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true)
                        postData(values).then(() => {
                            handleShowModalTwo()
                        })

                    }}
                >
                    {({values, isSubmitting}) => (
                        <FormikForm className="yellow">

                            <Field placeholder="Title" name="name" value={values.name} as={Form.Control}/>

                            <Field className="form-control text-area" placeholder="Description" as="textarea"
                                   name="summary" value={values.summary} rows={6}/>

                            <Field placeholder="Delivery Date" name="date" value={values.date}
                                   as={Form.Control}/>

                            <Field placeholder="Project Cost" name="cost" value={values.cost}
                                   as={Form.Control}/>

                            <Container className="formBottom">
                                <Form.Label>CleverX transaction fees (20%)</Form.Label>
                                <Form.Label>${values.cost * 0.2}</Form.Label>
                            </Container>

                            <Container className="formBottom">
                                <Form.Label>Total amount in $USD</Form.Label>
                                <Form.Label>${values.cost * 1.2}</Form.Label>
                            </Container>

                            <Container className="formButton">
                                <Button type="submit" disabled={isSubmitting}>Create Project</Button>
                            </Container>

                        </FormikForm>
                    )}
                </Formik>
            </Modal.Body>
        </>


    );
}

export default Project;