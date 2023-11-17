import { useSession, signIn, signOut } from "next-auth/react"


const Restrict = () => {
    const { data: session } = useSession()

    if (session) {
        return(
            <>Free access</>
            
        )
    }
    return ( 
    <>
    <div></div>
    This is a restricted page 
    </> );
}
 
export default Restrict;