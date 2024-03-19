import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

export const DesktopMenuAuthButton = () => (
  <div className="ml-4 flow-root lg:ml-8">
    <SignedIn>
      <UserButton afterSignOutUrl="/" userProfileUrl="/profile" userProfileMode="navigation" />
    </SignedIn>
    <SignedOut>
      <SignInButton>
        <span className="flex cursor-pointer items-center text-sm font-medium text-neutral-700 hover:text-neutral-800">
          Login
        </span>
      </SignInButton>
    </SignedOut>
  </div>
);
