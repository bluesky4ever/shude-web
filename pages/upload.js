import { useState } from 'react';
import axios from 'axios';

export default function Upload() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    console.log('clicked');

    if (!file) {
      alert('请选择文件');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      await axios.post(
        'https://shude-server-1.onrender.com/upload',
        formData
      );
      alert('上传成功');
    } catch (e) {
      console.error(e);
      alert('上传失败');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>上传素材</h1>

      <input
        type="text"
        placeholder="标题"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={() => handleSubmit()}>
        提交
      </button>
    </div>
  );
}
