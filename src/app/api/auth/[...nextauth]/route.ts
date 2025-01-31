import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email & Mot de passe",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // 🔹 Ici, tu devrais vérifier l'utilisateur dans ta base de données
        const user = await fakeUserAuth(email, password);

        if (!user) throw new Error("Email ou mot de passe incorrect");

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// Simule une vérification d'utilisateur (à remplacer par un appel à la base de données)
async function fakeUserAuth(email: string, password: string) {
  const users = [
    { id: "1", email: "test@example.com", password: "password123", name: "John Doe" },
  ];

  return users.find((user) => user.email === email && user.password === password) || null;
}
