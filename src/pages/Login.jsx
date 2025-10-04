import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'

export default function Login(){
  const [email, setEmail] = useState('student@ntu.edu.vn')
  const [password, setPassword] = useState('123456')
  const { login } = useAuth()
  const nav = useNavigate()
  const loc = useLocation()
  const from = (loc.state && loc.state.from) || '/dashboard'

  const onSubmit = (e)=>{
    e.preventDefault()
    login(email)
    nav(from, { replace:true })
  }

  return (
    <div className="panel" style={{maxWidth:480, margin:'40px auto'}}>
      <h2>Login (demo)</h2>
      <form onSubmit={onSubmit}>
        <div className="mt-2">
          <label className="small">Email</label>
          <input className="input" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%'}} />
        </div>
        <div className="mt-2">
          <label className="small">Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%'}} />
        </div>
        <button className="btn mt-3" type="submit">Login</button>
      </form>
    </div>
  )
}
