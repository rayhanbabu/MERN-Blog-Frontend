import { useForm } from 'react-hook-form';
import { useState ,useEffect } from "react";
import { useNavigate ,useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2'
import Header from '../component/Header';



function UpdateBlog() {
    let {id} = useParams();
    let navigate = useNavigate();
    let [isSubmit,setIsSubmit]=useState(false);
   
    
      const {
            register,
            formState: { errors },
            setValue,
            handleSubmit,
        }=useForm();


        useEffect(()=>{
                    
            const fetchBlog = async () => {
                try {
                  const response = await axios.get("https://ancovablog.vercel.app/SingleReadBlog/"+id);
                  const { title, author, content } = response.data['data'];
                  setValue("title", title);
                  setValue("author", author);
                  setValue("content", content);
                } catch (error) {
                  console.error(error);
                } 
              };
          
              fetchBlog();

              }, [id,setValue]);
    
            

       const onSubmit = async (data) =>{
                 setIsSubmit(true);
            let URL="https://ancovablog.vercel.app/UpdateBlog/"+id;
         let res = await axios.post(URL,data);
              if(res){
                Swal.fire({
                    title: 'Update!',
                    text: 'Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  navigate('/')
               } 
          }

    return (
        <div>
          <Header/>
              <ToastContainer />
             <div className="container mt-4 ">
              <div className="row">
                  <div className="col-sm-6  shadow p-4 ">
                     <form onSubmit={handleSubmit(onSubmit)} >

              <div className="mb-3">
                   <label htmlFor="exampleFormControlInput1" className="form-label"> Title </label>
                   <input type="text" {...register("title", { required: true })} 
                      className="form-control" />
                     <p className='text-danger'>
                        <error>
                            {errors.title?.type==="required" && "Title is required"}
                        </error>
                      </p> 
               </div>

               <div className="mb-3">
                   <label htmlFor="exampleFormControlInput1" className="form-label"> Author </label>
                   <input type="text" {...register("author", { required: true })} 
                     className="form-control" /> 
                     <p className='text-danger'>
                        <error>
                            {errors.author?.type === "required" && "Author is required"}
                        </error>
                      </p> 
               </div>

               <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label"> Content </label>
                    <input type="text" {...register("content", { required: true })} 
                   className="form-control" />
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

export default UpdateBlog
