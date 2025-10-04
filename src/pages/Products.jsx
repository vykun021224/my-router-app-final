import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { localProducts } from '../data/localProducts.js'

export default function Products(){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')

  useEffect(()=>{
    let ignore = false
    async function fetchData(){
      setLoading(true); setError(null)
      try{
        const { data } = await axios.get('https://fakestoreapi.com/products?limit=12',{ timeout: 6000 })
        if(!ignore){
          // map fields to our theme
          const mapped = data.map(d => ({
            id: d.id, title: d.title, price: d.price, 
            category: d.category, image: d.image, description: d.description
          }))
          setItems(mapped)
        }
      }catch(err){
        console.warn('API lỗi, dùng local fallback', err.message)
        if(!ignore) setItems(localProducts)
        setError('Không thể gọi API thật, đã dùng dữ liệu dự phòng.')
      }finally{
        if(!ignore) setLoading(false)
      }
    }
    fetchData()
    return ()=>{ ignore = true }
  },[])

  const filtered = useMemo(()=>{
    if(!q) return items
    const s = q.toLowerCase()
    return items.filter(p => p.title.toLowerCase().includes(s) || p.category.toLowerCase().includes(s))
  },[q, items])

  return (
    <section>
      <div className="row">
        <h2 style={{marginRight:'auto'}}>Products</h2>
        <input className="input" placeholder="Tìm theo tên/category..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      {error && <p className="small">⚠️ {error}</p>}
      {loading ? (
        <div className="center"><div className="badge">Đang tải...</div></div>
      ) : (
        <div className="grid mt-3">
          {filtered.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </section>
  )
}
