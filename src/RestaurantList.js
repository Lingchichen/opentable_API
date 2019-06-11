import React from 'react';

const RestaurantList =props=>{
  console.log(props.restaurants)
  const restaurants=props.restaurants.map((restaurant)=>{
    return (
      <table>
        <td>
          <tr><label>Name:</label>{restaurant.name}</tr>
          <tr><label>Address:</label>{restaurant.address}</tr>
          <tr><label>Price:</label>{restaurant.price}</tr>
        </td>
      </table>
    )

  });
  return <div>{restaurants}</div>;

};
export default RestaurantList;
