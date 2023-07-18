import { useEffect, useState } from "react"
import { supabase } from "../SupabaseClient"
import Book1 from "../images/book1.svg"

function AdminBooks() {
    const [books, setBooks] = useState(null)

    useEffect(()=> {

        const controller = new AbortController()
        const getBooks = async() => {
            let { data: Books, error } = await supabase
            .from('Books')
            .select('*')

            setBooks(Books)

            if(error) {
                alert(error)
            }
        }

        getBooks()

        return () => {
            controller.abort();
        }
      

    }, [])
  return (
    <div className="grid grid-cols-12 gap-4 ">
         <p className="font-bold my-5 col-span-12 text-2xl">Library</p>
        
 
                { books?.map((book, index) => (
                    <div key={index} className="col-span-3 bg-verylightAsh">
                    <img src={Book1} className="w-full  " alt="Books" />

                    <p className="p-2 bg-lightAsh w-20 rounded-xl font-bold my-2">{book.genre}</p>

                    <p className="my-2 line-clamp-2">{book.long_description}</p>

                    <p className="font-bold line-clamp-1">{book.author}</p>
                </div>
                ))}
    
                    

                   
                    

               
                {/* <div className="grid grid-cols-12 gap-5 w-full">
                    <div className="col-span-3 bg-verylightAsh">
                        <img src={Book1} className="w-full  " alt="Books" />

                        <p className="p-2 bg-lightAsh w-20 rounded-xl font-bold my-2">Medicine</p>

                        <p className="my-2">Short desc Short desc Short desc</p>

                        <p className="font-bold">John bell</p>
                    </div>

                   

                    <div className="col-span-3 bg-verylightAsh">
                        <img src={Book1} className="w-full  " alt="Books" />

                        <p className="p-2 bg-lightAsh w-20 rounded-xl font-bold my-2">Medicine</p>

                        <p className="my-2">Short desc Short desc Short desc</p>

                        <p className="font-bold">John bell</p>
                    </div>

                    <div className="col-span-3 bg-verylightAsh">
                        <img src={Book1} className="w-full  " alt="Books" />

                        <p className="p-2 bg-lightAsh w-20 rounded-xl font-bold my-2">Medicine</p>

                        <p className="my-2">Short desc Short desc Short desc</p>

                        <p className="font-bold">John bell</p>
                    </div>

                    <div className="col-span-3 bg-verylightAsh">
                        <img src={Book1} className="w-full  " alt="Books" />

                        <p className="p-2 bg-lightAsh w-20 rounded-xl font-bold my-2">Medicine</p>

                        <p className="my-2">Short desc Short desc Short desc</p>

                        <p className="font-bold">John bell</p>
                    </div>

                    

                    

                </div>  */}


       
           


    </div>
  )
}

export default AdminBooks