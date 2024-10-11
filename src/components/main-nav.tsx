import Image from 'next/image';
import { NavItem } from './nav-item';
import { UserAccountNav } from './user-account-nav';

export function MainNav() {
  return (
    <nav className="flex h-16 items-center justify-between border px-4">
      <div className="flex space-x-4 items-center">
        <NavItem href="/">
          <Image
            style={{ borderRadius: 20 }}
            src={'/assets/identafly_logo.png'}
            width="40"
            height="40"
            alt="home"
          ></Image>
        </NavItem>
        <NavItem href="/admin">Admin</NavItem>
      </div>
      <UserAccountNav />
    </nav>
  );
}
