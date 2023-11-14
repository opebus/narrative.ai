import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { Logo } from './Logo';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

export default function Nav() {
  return (
    <Navbar isBordered className='shadow-md h-16'>
      <NavbarBrand>
        <Link href='/' className='text-white-100'>
          <Logo />
          <p className='font-bold text-inherit'>narrative</p>
        </Link>
      </NavbarBrand>
      <NavbarContent
        className='hidden sm:flex gap-8 font-medium'
        justify='center'
      >
        <SignedOut>
          <NavbarItem>
            <Link color='foreground' href='#'>
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#' aria-current='page'>
              Why Narrative
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Who are we
            </Link>
          </NavbarItem>
        </SignedOut>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <SignedIn>
            <UserButton signInUrl='/' afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <div className='flex gap-4'>
              <SignInButton mode='modal' redirectUrl='/dashboard'>
                <Button variant='light'>Log In</Button>
              </SignInButton>
              <SignUpButton mode='modal' redirectUrl='/onboard'>
                <Button className='bg-teal-800 hover:bg-teal-950 text-white'>
                  Get Started
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
