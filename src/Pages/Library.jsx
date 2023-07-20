import { useEffect, useState } from "react"
import { supabase } from "../SupabaseClient"
import { Link } from "react-router-dom"

function Library() {
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
    <div className="grid grid-cols-12 gap-5 overflow-y-scroll ">
         <p className="font-bold my-5 col-span-12 text-2xl">Library</p>
        
 
                { books?.map((book, index) => (
        
                    <div key={index} className="col-span-3 bg-verylightAsh">
                        <Link to={`/dashboard/library/bookdetails/${book.id}`}>
                            <img src={book.image} className="w-full h-[300px] " alt="Books" />
                            {/* <blockquote class="imgur-embed-pub" lang="en" data-id="a/W5D4U9D" data-context="false" ><a href="//imgur.com/a/W5D4U9D"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}

                            <p className="p-2 bg-lightAsh w-20 rounded-xl font-bold my-2">{book.genre}</p>

                            <p className="my-2 line-clamp-2">{book.long_description}</p>

                            <p className="font-bold line-clamp-1">{book.author}</p>
                        </Link>
                  
                </div>
                ))}

    </div>
  )
}

export default Library