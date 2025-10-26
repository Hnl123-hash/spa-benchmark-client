import { create } from "zustand";
import { getMockUser } from "../mocks/userProfileMock";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface AuthState {
  user: User;
  login: (user: User) => void;
  logout: () => void;
}

const mockUser = getMockUser();

export const useAuthStore = create<AuthState>((set) => ({
  user: mockUser,
  login: (user) => set({ user }),
  // Simula um logout
  logout: () => set({ user: { name: "Visitante", email: "", avatar: "" } }),
}));
