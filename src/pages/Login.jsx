import Header from "../component/Header"
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');
    let [isSubmit,setIsSubmit]=useState(true);
    let [error,setError]=useState('');
    let navigate = useNavigate();


    const handleSubmit= async ()=>{
             setIsSubmit(false);

        if(email==="" || password===""){
               setError("E-mail & Password is Required");
               setIsSubmit(true);
        }else{
            let data={email,password};
            let URL="https://ancovablog.vercel.app/UserLogin";
            let res = await axios.post(URL,data);
            if(res.data.status==='fail'){
                 setError("Invalid E-mail OR  Password");
                 setIsSubmit(true);
             }else if(res.data.status==='success'){
                  let token=res.data['data'];
                  let loginInfo={token:token,email:email};
                  localStorage.setItem("loginInfo",JSON.stringify(loginInfo));
                  navigate('/'); 
             }

        }

       // let data={email,password};
       // let URL="https://ancovablog.vercel.app/UserLogin";
       // let res = await axios.post(URL,data);
      
    }

    return (
        <div>
            <Header/>
             <div className="container mt-4 ">
                <div className="row">
                  <div className="col-sm-6  shadow p-4 ">

                <form>        
                    <div className="mb-3">
                       <label htmlFor="exampleFormControlInput1" className="form-label"> E-mail </label>
                       <input type="text" onChange={(e)=>{setEmail(e.target.value)}}  className="form-control" />
                   </div> 

                  <div className="mb-3">
                       <label htmlFor="exampleFormControlInput1" className="form-label"> Password </label>
                       <input type="password" onChange={(e)=>{setPassword(e.target.value)}}  className="form-control" />
                 </div>

                  <p className="text-danger"> {error}</p> 

                
                 <button type="button" onClick={handleSubmit} className="btn btn-success m-2">{isSubmit?'Login':'Loging...'}</button>

                </form>
             </div>
           </div>
         </div>
        
        </div>
    )
}

export default Login
