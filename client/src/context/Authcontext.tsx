import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  loginUser,
  registerUser,
  getProfile,
  type User,
  type RegisterData,
  type LoginData,
} from "../services/Authservice";

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore authentication when the application starts
  useEffect(() => {
    const restoreSession = async () => {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const profile = await getProfile(storedToken);

        setToken(storedToken);
        setUser(profile.user);
      } catch {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  // Login
  const login = async (data: LoginData) => {
    const result = await loginUser(data);

    localStorage.setItem("token", result.token);
    setToken(result.token);

    const profile = await getProfile(result.token);
    setUser(profile.user);
  };

  // Register
  const register = async (data: RegisterData) => {
    await registerUser(data);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}