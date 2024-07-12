import React from 'react';

export default function ShowDetails({ selectedItem }) {
  if (!selectedItem) return null;

  return (
    <div className='show-details'>
      <h2>Selected Item Details</h2>
      <img src={selectedItem.cover} alt='' />
      <p>Game: {selectedItem.game}</p>
      <p>Date: {selectedItem.date}</p>
      <p>Time: {selectedItem.time}</p>
      <p>Reward: {selectedItem.reward}</p>
    </div>
  );
}
