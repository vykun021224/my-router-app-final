import { NavLink, Outlet, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'

export default function Layout(){
  const { user, logout } = useAuth()
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <Link to="/" className="brand" aria-label="NatureCare - home">
            <div className="logo"></div>
            <strong>NatureCare</strong>
          </Link>

          <div className="menu">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {user ? (
              <>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <button className="btn ghost" onClick={logout}>Logout</button>
              </>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </nav>
      <main className="container">
        <Outlet/>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} NatureCare • React Router + Axios demo
      </footer>
    </div>
  )
}
