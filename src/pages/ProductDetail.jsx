import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { localProducts } from '../data/localProducts.js'

export default function ProductDetail(){
  const { id } = useParams()
  const nav = useNavigate()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let ignore = false
    async function load(){
      setLoading(true)
      try{
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`, { timeout: 6000 })
        if(!ignore){
          setItem({
            id: data.id, title: data.title, price: data.price, 
            category: data.category, image: data.image, description: data.description
          })
        }
      }catch(e){
        const fallback = localProducts.find(p=> String(p.id) === String(id))
        if(!ignore) setItem(fallback || null)
      }finally{
        if(!ignore) setLoading(false)
      }
    }
    load()
    return ()=>{ ignore = true }
  },[id])

  if(loading) return <div className="center"><div className="badge">Đang tải...</div></div>
  if(!item) return <div className="center"><div className="panel"><p>Không tìm thấy sản phẩm.</p><button className="btn mt-3" onClick={()=>nav(-1)}>Quay lại</button></div></div>

  return (
    <section className="panel">
      <div className="row" style={{alignItems:'stretch'}}>
        <img src={item.image} alt={item.title} style={{width:360, maxWidth:'100%', borderRadius:16}}/>
        <div style={{flex:1}}>
          <h2 style={{marginTop:0}}>{item.title}</h2>
          <p className="lead">{item.description}</p>
          <div className="row mt-3">
            <span className="badge">{item.category}</span>
            <span className="price" style={{fontSize:22}}>${item.price}</span>
          </div>
          <div className="row mt-4">
            <button className="btn">Add to cart</button>
            <button className="btn ghost" onClick={()=>nav('/products')}>Back to list</button>
          </div>
        </div>
      </div>
    </section>
  )
}
