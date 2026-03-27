import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>成都市树德中学（外国语校区）</h1>
      <h2>团总支学生会宣传部</h2>

      <p>记录校园 · 传播声音</p>

      <div style={{ marginTop: 30 }}>
        <Link href="/materials">📁 浏览素材库</Link><br /><br />
        <Link href="/upload">⬆️ 上传素材</Link>
      </div>
    </div>
  );
}
