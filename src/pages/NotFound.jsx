import Header from "../component/Header"
import { NavLink } from "react-router-dom"


function NotFound() {
    return (
        <div>
            <Header/>
            <p className="text-center p-3">
            <h1>Page Not Fount </h1>
            <NavLink to="/" className="btn btn-success" > Go Home </NavLink>
            </p>
           
        </div>
    )
}

export default NotFound
