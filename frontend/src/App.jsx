import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <h1>Hi welcome to dashboard</h1>
      <SignedOut><SignIn /></SignedOut>
      <SignedIn><Dashboard /></SignedIn>
    </>
  );
}
