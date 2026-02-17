import Link from "next/link";
import "./signinbar.css";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function SignInBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <div className="logo-icon">⚔️</div>
            <span className="logo-text">Dumbbells & Dragons</span>
          </Link>

          {/* Accept these below changes*/}
          <div className="navbar-auth">
            <SignInButton>
              <button className="btn-login">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="btn-signup">Sign Up</button>
            </SignUpButton>{" "}
          </div>
          {/*Accept these above changes*/}
        </div>
      </div>
    </nav>
  );
}
