import { useForm } from 'react-hook-form';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import Header from '../component/Header';



function CreateBlog() {
    let [FormValue,SetFormValue]= useState({title:"",author:"",content:""});
    let navigate = useNavigate();
    let [isSubmit,setIsSubmit]=useState(false);

   
      const InputOnChange = (property,value) => {
           SetFormValue({...FormValue,[property]:value});
       }

    

    
    const {
         register,
         handleSubmit,
         formState: { errors },
       }=useForm();



       const onSubmit = async (FormValue) =>{
            setIsSubmit(true);
            let URL="https://ancovablog.vercel.app/CreateBlog";
            
        
         let res = await axios.post(URL,FormValue);
              if(res){
                Swal.fire({
                    title: 'Added!',
                    text: 'Data Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                   navigate('/'); 
               } 
          }

    return (
        <div>
             <Header></Header>
             <div className="container mt-4 ">
              <div className="row">
                  <div className="col-sm-6  shadow p-4 ">
                     <form onSubmit={handleSubmit(onSubmit)} >

              <div className="mb-3">
                   <label htmlFor="exampleFormControlInput1" className="form-label"> Title </label>
                   <input type="text" {...register("title", { required: true })} 
                    value={FormValue.title} onChange={(e)=>{InputOnChange('title',e.target.value)}}  className="form-control" />
                     <p className='text-danger'>
                        <error>
                            {errors.title?.type==="required" && "Title is required"}
                        </error>
                      </p> 
               </div>

               <div className="mb-3">
                   <label htmlFor="exampleFormControlInput1" className="form-label"> Author </label>
                   <input type="text" {...register("author", { required: true })} 
                    value={FormValue.author} onChange={(e)=>{InputOnChange('author',e.target.value)}} className="form-control" /> 
                     <p className='text-danger'>
                        <error>
                            {errors.author?.type === "required" && "Author is required"}
                        </error>
                      </p> 
               </div>

               <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"> Content </label>
                    <input type="text" {...register("content", { required: true })} 
                     value={FormValue.content} onChange={(e)=>{InputOnChange('content',e.target.value)}} className="form-control" />
                     <p className='text-danger'>
                        <error>
                            {errors.content?.type === "required" && "Content is required"}
                        </error>
                      </p> 
                </div>

                        
                         <br></br>
                        <button className="btn btn-success m-2">{isSubmit?'Save Changeing':'Save Change'}</button>
                    </form>
                </div>

              </div>
             
           </div>
           
        </div>
    )
}

export default CreateBlog
