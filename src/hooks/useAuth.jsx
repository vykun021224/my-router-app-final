import { createContext, useContext, useEffect, useState } from 'react'

const AuthCtx = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(()=>{
    const raw = localStorage.getItem('nc_user')
    return raw ? JSON.parse(raw) : null
  })
  useEffect(()=>{
    localStorage.setItem('nc_user', JSON.stringify(user))
  },[user])
  const login = (email) => setUser({ email })
  const logout = () => setUser(null)
  return <AuthCtx.Provider value={{ user, login, logout }}>{children}</AuthCtx.Provider>
}
export function useAuth(){ return useContext(AuthCtx) }
