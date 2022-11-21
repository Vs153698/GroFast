import { AuthProvider } from "./hooks/useAuth";
import RootNavigation from "./hooks/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}


