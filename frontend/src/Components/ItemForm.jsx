import { useState } from 'react';
import axios from 'axios';

export default function ItemForm() {
  const [form, setForm] = useState({
    name: '',
    place: '',
    description: '',
    image: null,
    is_found: true, // true means Found, false means Lost
  });

  const handleChange = e => {
    const { name, value, files, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : (name === 'is_found' ? value === 'found' : value),
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', form.name);
    data.append('place', form.place);
    data.append('description', form.description);
    data.append('is_found', form.is_found);
    if (form.image) data.append('image', form.image);

    try {
      await axios.post('http://localhost:8000/api/items/', data);
      alert(`${form.is_found ? 'Found' : 'Lost'} item submitted!`);
    } catch (err) {
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Your Name" required />
      <input name="place" onChange={handleChange} placeholder="Location" required />
      <textarea name="description" onChange={handleChange} placeholder="Description" required />
      <input type="file" name="image" accept="image/*" onChange={handleChange} />

      <div className='checkbox'>
        <label className='checkbox-option'>
          <input type="radio" name="is_found" value="found" checked={form.is_found === true} onChange={handleChange} /> Found </label>

        <label className='checkbox-option'>
          <input type="radio" name="is_found" value="lost" checked={form.is_found === false} onChange={handleChange}/>Lost</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}