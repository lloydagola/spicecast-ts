import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from '@mui/material/Button'


const App:React.FC = () => {

    return <div className='App'>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    </div>
}

const Home:React.FC = () => {

    return <>
        <Button variant="contained">
            Home sweet home
        </Button>
    </>
}

const About:React.FC = () => {

    return <>I know all about that"</>
}

const Contact:React.FC = () => {

    return <>the smoking gun</>
}

export default App