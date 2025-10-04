import { useAuth } from '../hooks/useAuth.jsx'

export default function Protected(){
  const { user } = useAuth()
  return (
    <section className="panel">
      <h2>Dashboard</h2>
      <p className="lead">Xin chào <strong>{user?.email}</strong>. Đây là khu vực chỉ dành cho user đã đăng nhập.</p>
    </section>
  )
}
