import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

<ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
  <App />
</ClerkProvider>