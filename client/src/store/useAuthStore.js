import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      // eslint-disable-next-line no-unused-vars
      login: async (email, password) => {
        set({ loading: true, error: null });
        try {
          const mockUser = {
            id: '1',
            name: 'John Doe',
            email,
            avatar: null,
          };

          set({ user: mockUser, isAuthenticated: true, loading: false });
          return true;
        } catch (error) {
          set({ error: error.message, loading: false });
          return false;
        }
      },

      register: async (userData) => {
        set({ loading: true, error: null });
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const mockUser = {
            id: '1',
            ...userData,
            avatar: null,
          };

          set({ user: mockUser, isAuthenticated: true, loading: false });
          return true;
        } catch (error) {
          set({ error: error.message, loading: false });
          return false;
        }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false, error: null });
      },

      updateProfile: async (profileData) => {
        set({ loading: true, error: null });
        try {
          set((state) => ({
            user: { ...state.user, ...profileData },
            loading: false,
          }));
          return true;
        } catch (error) {
          set({ error: error.message, loading: false });
          return false;
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
