import React from 'react'
import Cards from './Cards';


function CardList({ results }) {
  let data = [];
  if (results.data) {
    console.log(results.data);
    data = results.data || [];



  }
  
  return (
    

    <div>
      
      {data.map((item) => (
        <Cards key={item.country} covid19={item} />
      ))}

    </div>
  );

}
export default CardList