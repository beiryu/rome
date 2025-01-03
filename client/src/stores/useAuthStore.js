import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (email, password, role = 'user') => {
        set({ loading: true, error: null });
        try {
          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (role === 'staff') {
            const mockStaff = {
              id: 'staff-1',
              name: 'Staff Admin',
              email,
              role: 'staff',
              avatar: null,
            };
            set({ user: mockStaff, isAuthenticated: true, loading: false });
            return true;
          } else {
            const mockUser = {
              id: 'user-1',
              name: 'John Doe',
              email,
              role: 'user',
              avatar: null,
            };
            set({ user: mockUser, isAuthenticated: true, loading: false });
            return true;
          }
        } catch (error) {
          set({ error: error.message, loading: false });
          return false;
        }
      },

      register: async (userData, role = 'user') => {
        set({ loading: true, error: null });
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const mockUser = {
            id: role === 'staff' ? 'staff-1' : 'user-1',
            ...userData,
            role,
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
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

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
