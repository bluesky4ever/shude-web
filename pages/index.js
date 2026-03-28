export default function Home() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont',
      padding: '60px 20px',
      textAlign: 'center',
      background: '#f5f5f7',
      minHeight: '100vh'
    }}>
      
      <h1 style={{
        fontSize: '42px',
        fontWeight: '600',
        marginBottom: '10px'
      }}>
        树德中学外国语校区
      </h1>

      <h2 style={{
        fontSize: '20px',
        color: '#666',
        marginBottom: '40px'
      }}>
        团总支学生会 · 宣传部
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        
        <a href="/materials" style={{
          padding: '12px 24px',
          background: '#0071e3',
          color: '#fff',
          borderRadius: '20px',
          textDecoration: 'none'
        }}>
          浏览素材库
        </a>

        <a href="/upload" style={{
          padding: '12px 24px',
          background: '#e5e5ea',
          borderRadius: '20px',
          textDecoration: 'none',
          color: '#000'
        }}>
          上传素材
        </a>

      </div>
    </div>
  );
}
