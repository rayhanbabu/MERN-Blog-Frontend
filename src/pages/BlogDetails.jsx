import { NavLink, useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import axios from "axios";
import formatDate from "../component/FormatDate";
import Header from "../component/Header";


function BlogDetails(){

    const [data,setData]=useState([]);
    let {id} = useParams();

    useEffect(()=>{
      (async ()=>{
          const res=await axios.get("https://ancovablog.vercel.app/SingleReadBlog/"+id)
             setData(res.data['data']);
            })()
    },[id]);

    return (
        <div>   
            <Header></Header>
        <div className="container p-3">
            <div className="card">
      <h5 className="card-header">{data['title']}</h5>
      <div className="card-body">
      <h5 className="card-title">{data['author']}</h5>
      <p className="card-text"><small className="text-body-secondary">{formatDate(data['createdAt'])}</small></p>
       <p className="card-text">
          {data['content']}
    </p>

    <NavLink to="/" className="btn btn-primary" > Back </NavLink>
  </div>
</div>

        </div>
        </div>
    )
}

export default BlogDetails
