  const [file, setFile] = useState(null);

  // ✅ 页面加载检测
  useEffect(() => {
    console.log('✅ 页面加载成功');
  }, []);

  const handleSubmit = async () => {
    console.log('🔥 按钮被点击了');

    if (!file) {
      alert('请选择文件');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      const res = await axios.post(
        'https://shude-server-1.onrender.com/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log('✅ 上传成功返回：', res.data);
      alert('上传成功');
    } catch (err) {
      console.error('❌ 上传失败：', err);
      alert('上传失败');
    }
  };

  return (
    <div style={{
      padding: 40,
      fontFamily: '-apple-system'
    }}>
      <h1>上传素材（调试版）</h1>

      <input
        type="text"
        placeholder="请输入标题"
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: '8px',
          width: '300px'
        }}
      />

      <br /><br />

      <input
        type="file"
        onChange={(e) => {
          console.log('📂 选择文件：', e.target.files[0]);
          setFile(e.target.files[0]);
        }}
      />

      <br /><br />

      <button
        onClick={() => handleSubmit()}   // ✅ 强制触发（关键）
        style={{
          padding: '10px 20px',
          background: '#0071e3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        提交
      </button>
    </div>
  );
}
