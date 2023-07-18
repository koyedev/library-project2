import { useEffect, useState } from "react"
import Logo from  "../images/logo.svg"
import { supabase } from "../SupabaseClient"
import ClipLoader from "react-spinners/ClipLoader";
import { Link, useNavigate } from "react-router-dom";

function Login() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()

   useEffect(() => {
     
   }, [])


    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
                
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
          alert(error.error_description || error.message)
          setLoading(false)
        }else if(data.user.user_metadata.role == "student") {
          navigate("/dashboard/library")
          setLoading(false)
          console.log(data.user.user_metadata)
          console.log(data.session.access_token)

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
        
          <form onSubmit={handleLogin} className="w-8/12 flex flex-col mx-auto">
              
             
              <label htmlFor="email" className="text-lg font-[500] mb-2">Email</label>
              <input className="outline-none  bg-lightAsh rounded-md p-2 w-full" type="text" name="email" value={email} placeholder="Enter your Email" onChange={e => setEmail(e.target.value)} required /><br/>
              <label htmlFor="password" className="text-lg font-[500] mb-2">Password</label>
              <input className="outline-none bg-lightAsh rounded-md p-2 w-full" type="password" name="password" value={password} placeholder="Enter your Password" onChange={e => setPassword(e.target.value)} required />

              <div className="flex items-center py-3 gap-3">
                  <button type="submit" className="px-4 py-2 my-4 rounded-md bg-black text-white w-max" >Login</button>

                  <Link to="/register">Don't have an account? </Link>

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

export default Login