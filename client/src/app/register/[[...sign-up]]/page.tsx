import { SignUp } from '@clerk/nextjs';

export const metadata = {
  title: 'Register',
  description: 'Register an account',
}

export default function RegisterPage() {
  return (
    <main className="flex min-h-full items-center justify-center">
      <SignUp />
    </main>
  );
}
