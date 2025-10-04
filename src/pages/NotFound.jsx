import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="center">
      <div className="panel" style={{textAlign:'center'}}>
        <h2>404</h2>
        <p className="lead">Trang bạn tìm không tồn tại.</p>
        <Link className="btn mt-3" to="/">Về trang chủ</Link>
      </div>
    </div>
  )
}
