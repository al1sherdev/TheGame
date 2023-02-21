import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Navbar.scss';
import  {FiSearch}  from 'react-icons/fi';


const Navbar = () => {
    const [search, setSearch] = useState('');
    console.log(search);

  return (
    <div className='navbar navbar'>
        <Container>
            <Row className='navbar_wrap'>
                <Col sm="12" md="2" lg="4" xl="3">
                    <div className='navbar_logo'>
                        RG
                    </div>
                </Col>
                <Col sm="12" md="5" lg="6" xl="7">
                    <div className='navbar_search'>
                        <FiSearch  className='search_icon'/>
                        <input 
                            type="text" 
                            placeholder='search'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </Col>
                <Col sm="12" md="2" lg="2" xl="2">
                    <div className='settings'>
                        Settings
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Navbar