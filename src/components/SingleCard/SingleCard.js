import React from 'react';
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './SingleCard.scss';

const SingleCard = ({ item }) => {
  return (
          <Link to={`single-page/${item.id}`} >
            <div className="single_card">
                <img src={item.background_image || "yoq"} alt="" />
                <div className='single_card_body'>
                  <h4>{item.name}</h4>
                  <p className='added'>
                    <BsFillBookmarkPlusFill className='plus' />
                    <p className='added_data'>{item.added}+</p>
                  </p>
                  <div className='single_card_details'>
                    <div className='single_detail'>
                      <p className='single_detail_title'>Released date:</p> 
                      <p className='single_detail_data'>{item.released}</p>
                    </div>
                    <div className='single_detail'>
                      <p className='single_detail_title'>Rating:</p> 
                      <p className='single_detail_data'>{item.rating}</p>
                    </div>
                    <div className='single_detail'>
                      <p className='single_detail_title'>Genres:</p> 
                      <p className='single_detail_data'>
                        {
                          item.genres.map((item, index) => {
                            return(
                              <p className='single_card_genres' key={index}>{item.name} ,</p>
                            )
                          })
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </Link>
  )
}

export default SingleCard
