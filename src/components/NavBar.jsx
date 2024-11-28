import CartWidget from "./CartWidget"


function NavBar({brandName, categoria1, categoria2, categoria3}){
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{brandName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{categoria1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{categoria2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{categoria3}</a>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
        <CartWidget></CartWidget>
      </form>
        
    </div>
  </div>
</nav>
)
}

export default NavBar