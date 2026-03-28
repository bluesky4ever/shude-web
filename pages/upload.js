import { useState } from 'react';
import axios from 'axios';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    console.log('🚀 点击上传');

    if (!file) {
      alert('请选择文件');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title || '未命名素材');
    formData.append('author', author || '匿名');

    try {
      const res = await axios.post(
        'https://shude-server-1.onrender.com/upload',
        formData
      );

      console.log('✅ 上传成功:', res.data);
      alert('上传成功！');

      // 清空表单
      setTitle('');
      setAuthor('');
      setFile(null);

    } catch (err) {
      console.error('❌ 上传失败:', err);
      alert('上传失败，请重试');
    }

    setLoading(false);
  };

  return (
    <div style={{
      padding: '60px 20px',
      fontFamily: '-apple-system',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      
      <h1 style={{ marginBottom: '30px' }}>上传素材</h1>

      {/* 标题 */}
      <input
        type="text"
        placeholder="素材标题"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />

      {/* 作者 */}
      <input
        type="text"
        placeholder="作者（可匿名）"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '1px solid #ccc'
        }}
      />

      {/* 文件 */}
      <input
        type="file"
        onChange={(e) => {
          console.log('📂 文件:', e.target.files[0]);
          setFile(e.target.files[0]);
        }}
        style={{ marginBottom: '20px' }}
      />

      {/* 按钮 */}
      <button
        onClick={() => handleSubmit()}
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          background: loading ? '#aaa' : '#0071e3',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        {loading ? '上传中...' : '提交素材'}
      </button>

    </div>
  );
}
