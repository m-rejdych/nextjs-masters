import { UserProfile } from '@clerk/nextjs';

export const metadata = {
  title: 'Profile',
  description: 'Your profile',
};

export default function Profile() {
  return (
    <main className="flex items-center justify-center">
      <UserProfile />
    </main>
  );
}
