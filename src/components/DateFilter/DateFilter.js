import React from 'react';
import './DateFilter.scss';

const DateFilter = ({ setStartDate, setEndDate, getPopulorGames }) => {
  return (
    <div className="date_filter">
        <form  onSubmit={(e) => getPopulorGames(e)}>
            <input placeholder='startdate' type="date" onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
            <button className='date_btn'>Results</button>
        </form>
    </div>
  )
}

export default DateFilter;