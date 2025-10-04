import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="hero">
      <div className="panel">
        <h1>Skincare that loves your skin 💚</h1>
        <p className="lead">NatureCare là demo React Router + Axios tuần 1.
        Duyệt danh mục sản phẩm, xem chi tiết, login và thử Protected Route.</p>
        <div className="mt-3 row">
          <Link className="btn" to="/products">Shop now</Link>
          <Link className="btn ghost" to="/about">Learn more</Link>
        </div>
      </div>
      <div className="panel">
        <img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop" alt="NatureCare hero" style={{width:'100%', borderRadius:16}}/>
      </div>
    </section>
  )
}
