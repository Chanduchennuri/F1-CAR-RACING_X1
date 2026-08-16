const API_URL = "http://localhost:5000/api/auth";

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
}

export interface AuthResponse {
  token: string;
}

export interface ProfileResponse {
  message: string;
  user: User;
}

// Register
export async function registerUser(data: RegisterData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || result.message || "Registration failed");
  }

  return result;
}

// Login
export async function loginUser(data: LoginData): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || result.message || "Login failed");
  }

  return result;
}

// Get authenticated user's profile
export async function getProfile(
  token: string
): Promise<ProfileResponse> {
  const response = await fetch(`${API_URL}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to fetch profile");
  }

  return result;
}
