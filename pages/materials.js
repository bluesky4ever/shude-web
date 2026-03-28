import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Materials() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://shude-server-1.onrender.com/materials')
      .then(res => setList(res.data));
  }, []);

  return (
    <div style={{
      padding: '40px',
      fontFamily: '-apple-system'
    }}>
      
      <h1 style={{ marginBottom: '30px' }}>素材库</h1>

      {list.length === 0 && (
        <p style={{ color: '#888' }}>暂无素材</p>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        
        {list.map(item => (
          <div key={item.id} style={{
            background: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            
            {/* 图片 / 视频 */}
            {item.type === 'image' ? (
              <img
                src={item.url}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
            ) : (
              <video
                src={item.url}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
              />
            )}

            {/* 文本信息 */}
            <div style={{ padding: '12px' }}>
              <h3 style={{
                fontSize: '16px',
                marginBottom: '6px'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '12px',
                color: '#666'
              }}>
                {item.author}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
