import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Materials() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://shude-server-1.onrender.com/materials')
      .then(res => setList(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>素材库</h1>

      {list.length === 0 && <p>暂无素材</p>}

      {list.map(item => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
}
