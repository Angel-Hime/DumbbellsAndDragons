import Link from "next/link";
import NavDropdownMenu from "./NavDropdownMenu";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        {/* DO NOT ACCEPT THIS!! */}
        <SignOutButton />
        {/* DO NOT ACCEPT THIS!! */}
        <NavDropdownMenu />
        <Link href={"/"}>⚔️ Dumbbells & Dragons</Link>
        <UserButton />
      </nav>
    </>
  );
}
