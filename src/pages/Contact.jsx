export default function Contact(){
  return (
    <section className="panel">
      <h2>Contact</h2>
      <p className="lead">Liên hệ demo: hello@naturecare.local</p>
      <form className="mt-3" onSubmit={(e)=>{e.preventDefault(); alert('Form submitted (demo)')}}>
        <div className="row mt-2">
          <input className="input" placeholder="Họ tên"/>
          <input className="input" placeholder="Email"/>
        </div>
        <div className="mt-2">
          <textarea className="input" rows="5" style={{width:'100%'}} placeholder="Nội dung"></textarea>
        </div>
        <button className="btn mt-3">Gửi</button>
      </form>
    </section>
  )
}
