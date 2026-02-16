import Link from "next/link";
import "./signinbar.css";

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

          {/* These will be clerk auth sign in/ sign up buttons*/}
          <div className="navbar-auth">
            <Link href="/sign-in" className="btn-sign-in">
              Sign In
            </Link>
            <Link href="/sign-up" className="btn-sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
