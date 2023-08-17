import { NavLink, useNavigate } from "react-router-dom"


function Header() {
  let loginInfo=JSON.parse(localStorage.getItem("loginInfo"))
  let navigate = useNavigate();
 

    function Logout(){
         localStorage.clear();
         navigate("/login")
    }


 
    return (
        <div className="container-fluid">

  <nav className="navbar navbar-expand-lg  sticky-top p-lg-3 p-sm-1 shadow">
    <a href="#" className="navbar-brand d-flex align-items-center border-end px-3 px-lg-5">
       <h2 className="m-0"> 
              <i className="fa fa-car text-primary me-2"/> Blog Application 
       </h2>
  </a>
  <button
    type="button"
    className="navbar-toggler me-4"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0"> 
         <NavLink to="/" className="nav-item nav-link" > Blog Show </NavLink>
        
       {loginInfo?
        <> 
             <NavLink to="/create" className="nav-item nav-link" > Create Blog</NavLink>
             <button type="button" className="btn btn-danger" onClick={Logout}>Logout</button>
        </>:
        <>
             
             <NavLink to="/login" className="nav-item nav-link" >Login </NavLink>
            
          
        </>
       }
        
    
    </div>
  </div>
</nav>


        </div>
    )
}

export default Header
