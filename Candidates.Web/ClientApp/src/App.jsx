import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Refused from './Refused';
import Details from './Details';
import Home from './Home';
import Layout from './Layout';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import Confirmed from './Confirmed';
import { CountContextComponent } from './CountContextComponent';
const App = () => {

    return (
        <CountContextComponent>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/AddCandidate' element={<AddCandidate />} />
                <Route exact path='/Pending' element={<Pending />} />
                <Route exact path='/Confirmed' element={<Confirmed />} />
                <Route exact path='/Refused' element={<Refused />} />
                <Route exact path='/Details/:id' element={<Details />} />
            </Routes>
        </Layout>
        </CountContextComponent>
    );

};



export default App;