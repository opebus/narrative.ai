import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { Logo } from './logo';

export default function Nav() {
  return (
    <Navbar isBordered className='shadow-md'>
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
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button as={Link} href='#' variant='light'>
            Log In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href='#'
            className='bg-teal-800 hover:bg-teal-950 text-white'
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
