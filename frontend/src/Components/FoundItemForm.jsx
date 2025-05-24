import { useState } from 'react';
import axios from 'axios';

export default function FoundItemForm() {
  const [form, setForm] = useState({
    finder_name: '',
    found_place: '',
    description: '',
    image: null
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    for (const key in form) {
      data.append(key, form[key]);
    }

    try {
      await axios.post('http://localhost:8000/api/found-items/', data);
      alert('Item submitted!');
    } catch (err) {
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="finder_name" onChange={handleChange} placeholder="Your Name" required />
      <input name="found_place" onChange={handleChange} placeholder="Found Location" required />
      <textarea name="description" onChange={handleChange} placeholder="Description" required />
      <input type="file" name="image" accept="image/*" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}