import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePage = ({ item }) => {

  const { id } = useParams();
  console.log(id)

  return (
    <Link to={`/single-page/${item.id}`} >
        <h1>hello single page</h1>
    </Link>
  )
}

export default SinglePage