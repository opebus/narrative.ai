'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ClerkLoaded, ClerkProvider } from '@clerk/nextjs';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ClerkProvider>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ClerkProvider>
    </NextUIProvider>
  );
}
