import { Link } from 'react-router-dom'

export default function ProductCard({ p }){
  return (
    <article className="card">
      <img src={p.image} alt={p.title}/>
      <div className="title">{p.title}</div>
      <div className="row">
        <span className="price">${p.price}</span>
        <span className="badge">{p.category}</span>
      </div>
      <div className="mt-3 row">
        <Link className="btn" to={`/products/${p.id}`}>View</Link>
        <a className="btn ghost" href="#!" onClick={(e)=>{e.preventDefault(); alert('This is a demo ✨')}}>Add to cart</a>
      </div>
    </article>
  )
}
