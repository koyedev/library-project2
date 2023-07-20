import { useEffect, useState } from "react"
import Logo from  "../images/logo.svg"
import { supabase } from "../SupabaseClient"
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Register() {
   const [loading, setLoading] = useState(false)
   const[formData, setFormData] = useState({
     firstname : "",
     lastname : "",
     email : "",
     Address : "",
     number : "",
     role : "",
     department: "",
     matricNo : "",
     password : ""
   })

   const handleChange =(e) =>{

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
   }

   useEffect(() => {
     
   }, [])


    const handleSignup = async (e) => {
        e.preventDefault()
        setLoading(true)

        try{
          const { data, error } = await supabase.auth.signUp(
            {
              email: formData.email,
              password: formData.password,
              phone: formData.number,
              options: {
                data: {
                  firstname: formData.firstname,
                  lastname: formData.lastname,
                  role: formData.role,
                  phoneNo: formData.number,
                  address: formData.Address,
                  department: formData.department
  
                }
              }
              , rate_limit: {
                emails_per_hour: 100,
              },
            }
          )
          
          setLoading(false)
      console.log(error)
      console.log(data)
      console.log(formData)
    // alert("Successfully Registered")
      }catch(error) {
        alert(error)
        setLoading(false)
      } 
        
  
    }

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-6 bg-lightAsh h-screen">
        <div className="flex items-center flex-col "> 
            <img className="mt-10-5" src={Logo} alt="Oau Logo" />

            <p>Nice to see you again Welcome back</p>

            <p>Welcome back</p>
        </div>

      </div>

      <div className="col-span-6  flex items-center">
        
          <form onSubmit={handleSignup} className="w-8/12  grid grid-cols-2 gap-7 mx-auto">

              <input type="text" placeholder="Enter Firstname" value={formData.firstname} name="firstname" className="p-2 col-span-1 bg-[#edebeb] rounded-md" onChange={handleChange} required/>
              <input type="text" placeholder="Enter lastname" value={formData.lastname} name="lastname" className="p-2 col-span-1 bg-[#edebeb] rounded-md" onChange={handleChange} required/>

              <input type="email" placeholder="Enter Email Address" value={formData.email} name="email" className="p-2 col-span-2 bg-[#edebeb] rounded-md" onChange={handleChange} required />
              <input type="=text" placeholder="Enter House Address" value={formData.Address} name="Address" className="p-2 col-span-2 bg-[#edebeb] rounded-md" onChange={handleChange} required/>

              <input type="number" placeholder="Enter Phonenumber" value={formData.number} name="number" className="p-2 col-span-1 bg-[#edebeb] rounded-md" onChange={handleChange} required />

              
              <select className="p-2 col-span-1 bg-[#edebeb] rounded-md" name="role" onChange={handleChange} required>
                <option>Role</option>
                <option value="student">Student</option>
                <option value="staff">staff</option>
              </select>

              <input type="=text" placeholder="Enter Department" value={formData.department} name="department" className="p-2 col-span-2 bg-[#edebeb] rounded-md" onChange={handleChange} required/>
              <input type="=text" placeholder="Enter Matric no" value={formData.matricNo} name="matricNo" className="p-2 col-span-2 bg-[#edebeb] rounded-md" onChange={handleChange} required/>
              <input type="password" placeholder="Enter your password" value={formData.password} name="password" className="p-2 col-span-2 bg-[#edebeb] rounded-md" onChange={handleChange} required/>
              
             
              <div className="flex items-center py-3 gap-3 col-span-2">
                  <button type="submit" className="px-4 py-2 my-4 rounded-md bg-black text-white w-max" >Sign up</button>

                  <Link to="/">Have an account? </Link>

                  <ClipLoader
                      color="#000"
                      loading={loading}
                      size={30}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      
                    />
              </div>
             
          </form>
       
        
      </div>

    </div>
  )
}

export default Register