export default function About(){
  return (
    <section className="panel">
      <h2>About</h2>
      <p className="lead">
        Dự án mẫu dùng <strong>React Router v6</strong> với các trang cơ bản, 
        danh mục sản phẩm lấy từ API, và <em>Protected Route</em> cho /dashboard.
      </p>
      <ul>
        <li>SPA routing: Layout, Outlet, NavLink active</li>
        <li>Products list + Product detail (dynamic route)</li>
        <li>Axios + fallback offline data</li>
        <li>Login giả lập (localStorage) + PrivateRoute</li>
        <li>UI tối hiện đại, responsive</li>
      </ul>
    </section>
  )
}
