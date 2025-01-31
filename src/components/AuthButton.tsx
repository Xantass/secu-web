"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
    const router = useRouter();
    const { data: session } = useSession();

    return session ? (
        <div>
            <p>Bienvenue, {session.user?.name} !</p>
            <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">Déconnexion</button>
        </div>
    ) : (
        <button onClick={() => router.push('/login')} className="bg-blue-500 px-4 py-2 rounded">Connexion</button>
    );
}
