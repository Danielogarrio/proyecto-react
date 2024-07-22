interface NavBarProps{
  brandName : string;
  imageSrcPath : string;


}
function NavBar({brandName,imageSrcPath}: NavBarProps){
   return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow ">
  <a className="navbar-brand" href="#">
    <img src={imageSrcPath} width="30" height="30" className="d-inline-block align-center" alt=""/>
    
    <span className="fw-bolder fs-4">
    {brandName}
    </span>
  </a>
  <button
   className="navbar-toggler"
   type="button"
   data-bs-toggle="collapse"
   data-bs-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent"
   aria-expanded="false"
   aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>


  </button>
  <div 
  className="collapse 
   navbar-collapse
   align-items-center
   d-flex
   flex-column
   flex-md-row"
  
  id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item">
        <a className="nav-link mdisable" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link mdisable" href="#">Menú</a>
      </li>
      <li className="nav-item">
        <a className="nav-link misable" href="#">Contacto</a>
      </li>
      <li className="nav-item">
        <a className="nav-link misable" href="#">Reservaciones</a>
      </li>
    </ul>
    <form className="d-flex me-3">
      <input className="form-control mr-sm-2" type="Buscar" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
   )

}
export default NavBar
