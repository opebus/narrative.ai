'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Spinner } from '@nextui-org/react';

export default function Page() {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user?.unsafeMetadata.onboarded) {
      user?.update({
        unsafeMetadata: {
          onboarded: false,
        },
      });
      router.push('/onboard');
    }
  }, [user]);

  if (!isLoaded || !user?.unsafeMetadata.onboarded) {
    return <Spinner />;
  }

  return (
    <div>
      This is the main page
      <div>
        <UserButton />
      </div>
    </div>
  );
}
