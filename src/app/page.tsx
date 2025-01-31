import Image from "next/image";
import AuthButton from "@/components/AuthButton";
import { authOptions } from "./api/auth/[...nextauth]/route"; 
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <p>Connecté en tant que {session.user?.name}</p>
      ) : (
        <p>Tu n'es pas connecté.</p>
      )}
      <AuthButton />
    </main>
  );
}
