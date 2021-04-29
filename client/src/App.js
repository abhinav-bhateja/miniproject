import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Project from './modal/Modal'

import './App.css';

function App() {

    const [show, setShow] = useState(false)

    return (
        <div className="App">
            <Button variant="outline-info" onClick={() => {
                setShow(!show)
            }}>
                Add Project
            </Button>

            <Project show={show} onHide={() => setShow(false)}/>
        </div>
    );
}

export default App;
