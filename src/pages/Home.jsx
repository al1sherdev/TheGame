import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DateFilter from '../components/DateFilter/DateFilter';
import Loader from '../components/Loader/Loader';
import SingleCard from '../components/SingleCard/SingleCard';
import { APIKEY } from '../context/api';
import { http } from '../http/http';
import '../styles/main.scss';



const Home = () => {
    const api_key = useContext(APIKEY)
    // states
    const [populor, setPopulor] = useState([])

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    useEffect(() => {
        getPopulorGames()
    }, [])
    
    const getPopulorGames = (e) => {
        if(e) {
            e.preventDefault()
        }
        http.get(`games?key=${api_key}&dates=${startDate || "2022-01-01"},${endDate || "2023-02-10"}&page_size=24&page=1`)
        .then(res => {
            console.log(res.data.results)
            setPopulor(res.data.results)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='populor main'>
        <Container>
            <Row>
                <div className='filter_wrap d-flex justify-content-between'>
                    <h2>Home</h2>
                    <DateFilter 
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        getPopulorGames={getPopulorGames}
                    />
                </div>
            </Row>
            <Row>
                {
                    populor.length > 0 ? (populor.map((item, index) => {
                        return(
                            <Col key={index} sm="12" md="6" lg="4" xl="3">
                                <SingleCard item={item} />
                            </Col>
                        )
                    })) : (
                        <Loader />
                    )
                }
            </Row>
        </Container>
    </div>
  )
}

export default Home