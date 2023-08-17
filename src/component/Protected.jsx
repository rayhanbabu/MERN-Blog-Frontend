import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

function Protected(props) {

    let Cmp=props.Cmp;

    let navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('loginInfo')){
           navigate("/login")
        }
   },[])
    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected
