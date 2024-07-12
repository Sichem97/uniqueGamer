import React, { useState } from 'react';
import PremiumCard from '../components/SuscribPremium/PremiumCard';
import { useHistory } from 'react-router-dom';

export default function ParentComponent() {
  const [selectedItem, setSelectedItem] = useState(null);
  const history = useHistory();

  const handleItemSelected = (item) => {
    setSelectedItem(item);
    history.push('/details');
  };

  return (
    <div>
      <PremiumCard onItemSelected={handleItemSelected} />
    </div>
  );
}
