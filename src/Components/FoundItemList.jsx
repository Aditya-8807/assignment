import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FoundItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/found-items/')
      .then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Found Items</h2>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h4>{item.description}</h4>
          <p><strong>Location:</strong> {item.finder_name}</p>
          <p><strong>Details:</strong> {item.found_place}</p>
          {item.image && (
            <img src={item.image} alt="Found item" width="250" />
          )}
        </div>
      ))}
    </div>
  );
}