import { Link, Outlet, useNavigate } from "react-router-dom"
import { supabase } from "../SupabaseClient"
import { useEffect, useState } from "react"
import Logo from "../images/logo.svg" 
import BorrowedSVG from "../images/borrowed-books.svg"
import OverdueSVG from "../images/overdue.svg"
import Overview from "../images/overvie-logo.svg"
import Profile from "../images/profile.svg"

import Header from "../components/Header"


function Dashboard() {
    const [userData, setuserData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.getUser()
        .then(({data :  {user}}) => {
            if (user?.user_metadata.role === "Admin"){
                navigate("/admin")
            }else{
                setuserData(user)
            }
        })

       
    }, [])

    useEffect(() => {
        const controller = new AbortController()
        const getUsers = async() => {
            let { data: users, error } =  await supabase
            .from('users')
            .select('*')

            console.log(users)
        }

        getUsers()

        return () => {
            controller.abort();
        }
    },[userData])

    if(!userData){
        navigate("/")
        return
    } 

    

    // console.log(userData)
    const handleLogout = async () => {
            let { error } = await supabase.auth.signOut()

            
            if(error){
                alert(error)
            }else{
                window.location.reload()
            }

    }
   return (
    <div className="grid w-full  grid-cols-12 ">
            <div   className="bg-lightAsh h-screen  col-span-2">
                <div className="flex items-center flex-col ">
                    <img src={Logo} className="h-40 w-40 mb-10" alt="Oau Logo" />
                    
                    <Link to="/dashboard/library" className="flex p-2 mb-2 rounded-md hover:bg-black hover:text-white cursor-pointer w-9/12">
                        
                            <img src={Overview} className="mr-2" alt="" />
                            <p className="">Library</p>
                        
                    </Link>
                    

                    <Link to="/dashboard/borrowed" className="flex p-2 mb-2 hover:bg-black hover:text-white rounded-md cursor-pointer w-9/12">
                        <img src={BorrowedSVG} className="mr-2 bg-white" alt="" />
                        <p >Borrowed Books</p>
                    </Link>
                   

                    <Link to="/dashboard/overdue-books" className="flex p-2 mb-2 hover:bg-black hover:text-white  rounded-md  cursor-pointer w-9/12" >
                        <img src={OverdueSVG} className="mr-2 bg-white" alt="" />
                        <p className="">Overdue Books</p>
                    </Link>

                    <button className="flex p-2 mb-2  bg-[#484747] first-letter text-white rounded-md cursor-pointer w-9/12" onClick={handleLogout}>
            
                        <p className="text-center">Logout</p>
                    </button>
                

                    <div className="flex items-center gap-2 mt-40">
                        <img src={Profile} className="" alt="" />
                         <p className="">Koye Dev</p>
                    </div>
                    
                </div>


            </div>

            <div className="col-span-10 ">
                
                <Header

                />

                <div className="p-6 mt-5">
                   <Outlet />
                </div>
             
            </div>

           
               
    </div>
  )
}

export default Dashboard