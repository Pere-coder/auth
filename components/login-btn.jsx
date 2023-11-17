import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

    return (
      
      <div className="bg-gray-200 w-full flex justify-evenly py-5">
        {session ? (
          <>
          <h1 className="">Signed in as <span className="font-bold cursor-pointer">{session.user.email}</span></h1>
          <button onClick={() => signOut()}>Sign out</button>
         </>
        ): (
          <>
           <h1> Not signed in</h1> 
          <button onClick={() => signIn()}>Sign in</button>
          </>
         
        )}
        </div>
        
    )
  }
