import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ItemList({ showFound }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/items/')
      .then(res => {
        const filtered = res.data.filter(item => item.is_found === showFound);
        setItems(filtered);
      });
  }, [showFound]);

  return (
    <div>
      <h2>{showFound ? 'Found' : 'Lost'} Items</h2>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h4>{item.description}</h4>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Location:</strong> {item.place}</p>
          {item.image && (
            <img src={item.image} alt="Item" width="250" />
          )}
        </div>
      ))}
    </div>
  );
}