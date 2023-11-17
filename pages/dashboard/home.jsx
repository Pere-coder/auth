import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react"


const Homepage = () => {
    const { data: session } = useSession()

    if (session) {
        return(
            <div className="flex flex-col items-center gap-10 mt-20 bg-gray-200 mx-auto w-[300px] p-10 rounded-md">
                <Link href="/" className="cursor-pointer hover:bg-green-500 p-2 hover:text-white">protected link 1</Link>
                <Link href="/" className="cursor-pointer hover:bg-green-500 p-2 hover:text-white">protected link 2</Link>
                <Link href="/" className="cursor-pointer hover:bg-green-500 p-2 hover:text-white">protected link 3</Link>
            </div>
            
        )
    }
    return ( 
    <div className="flex flex-col items-center gap-10 mt-20 bg-gray-200 mx-auto w-[300px] p-10 rounded-md">
     <button onClick={signIn} className="cursor-pointer hover:bg-green-500 p-2 hover:text-white">Sign In</button>
    </div> );
}
 
export default Homepage;