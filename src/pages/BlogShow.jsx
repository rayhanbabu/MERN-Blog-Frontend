import { NavLink } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios";
import formatDate from "../component/FormatDate";
import { ToastContainer, toast } from 'react-toastify';
import Header from "../component/Header";





function BlogShow() {
      const [data,setData]=useState([]);
       const [id,setId]=useState(0);
       let loginInfo=JSON.parse(localStorage.getItem("loginInfo"))

       useEffect(()=>{
        (async ()=>{
            const res=await axios.get("https://ancovablog.vercel.app/ReadBlog")
            setData(res.data['data']);
             })()
        },[id]);


        const onDelete = async (id) => {
          let URL="https://ancovablog.vercel.app/DeleteBlog/"+id;
          await axios.get(URL,
            {
              headers:{
                token:loginInfo['token']
              }
            })
          setId(id);
          toast.success("Deelete Successfull !",{
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000
           
          } );
        }

         console.log(data.length);

        
 
    return (
        <div>
          <Header></Header>
           <ToastContainer />
           
            
   <div className="container mt-4 ">
       <div className="row ">

       {
               
                 data.map((item,index)=>{
                      return(
     <div className="col-sm-3 p-3" key={index}>
          <div className="card">
          <div className="card-body shadow p-4">
            <h5 className="card-title">{item['title']}</h5>
               <p className="card-text">
               {item['author']}
               </p>
            <p className="card-text"><small className="text-body-secondary">{formatDate(item['createdAt'])}</small></p>
            <p className="text-center"> <NavLink to={"/blog-details/"+item['_id']} className="btn btn-primary me-2"> Show Details </NavLink> </p>
            <div className="card-body text-center">


            {loginInfo && <div>
                    <NavLink to={"/UpdateBlog/"+item['_id']} className="btn btn-success me-2 btn-sm">Edit</NavLink>
                   <button onClick={async ()=>{await onDelete(item['_id'])}} className="btn btn-danger btn-sm">Delete</button>
               </div>}
               

            </div>
         </div>
        </div>
      </div>
                        )
                      })
                 }

       </div>
    </div>

  


        </div>
    )
}

export default BlogShow
