import { SignIn } from '@clerk/nextjs';

export const metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <main className="flex min-h-full items-center justify-center">
      <SignIn />
    </main>
  );
}
