import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn()} className="bg-white p-2 px-4 rounded-lg">
            Login with Google
          </button>
        </div>
      </div>
    );
  } 
  return(
    <div className="bg-blue-900 min-h-screen flex">
        <Nav/>
        <div className="bg-white flex-grow">Logeado exitosamente {session.user.email}</div>;
    </div>
  );
}
