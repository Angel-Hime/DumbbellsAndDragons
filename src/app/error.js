"use client";

import { redirect } from "next/router";
import "./not-found.css";

export default function GlobalError({ error, reset }) {
  return (
    <div className="error-container">
      <h2>Oops! Something went wrong</h2>
      <p>Don&apos;t worry, our team has been notified.</p>
      <details>
        <summary>Error Details (for developers)</summary>
        <pre>{error.message}</pre>
      </details>
      <button onClick={redirect} className="home-button">
        TAKE ME HOME
      </button>
    </div>
  );
}
