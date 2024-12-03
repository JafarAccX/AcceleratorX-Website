const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const SALES_EMAIL = import.meta.env.VITE_SALES_EMAIL;
const SALES_PASSWORD = import.meta.env.VITE_SALES_PASSWORD;
const ENROLLMENT_EMAIL = import.meta.env.VITE_ENROLLMENT_EMAIL;
const ENROLLMENT_PASSWORD = import.meta.env.VITE_ENROLLMENT_PASSWORD;

if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !SALES_EMAIL || !SALES_PASSWORD || !ENROLLMENT_EMAIL || !ENROLLMENT_PASSWORD) {
  throw new Error('Missing admin, sales, or enrollment credentials in environment variables');
}

export type UserRole = 'admin' | 'sales' | 'enrollment';

interface AuthState {
  token: string;
  role: UserRole;
}

export const authService = {
  async login(email: string, password: string): Promise<{ success: boolean; role?: UserRole }> {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const authState: AuthState = { token: 'admin_authenticated', role: 'admin' };
      localStorage.setItem('auth_state', JSON.stringify(authState));
      return { success: true, role: 'admin' };
    }
    if (email === SALES_EMAIL && password === SALES_PASSWORD) {
      const authState: AuthState = { token: 'sales_authenticated', role: 'sales' };
      localStorage.setItem('auth_state', JSON.stringify(authState));
      return { success: true, role: 'sales' };
    }
    if (email === ENROLLMENT_EMAIL && password === ENROLLMENT_PASSWORD) {
      const authState: AuthState = { token: 'enrollment_authenticated', role: 'enrollment' };
      localStorage.setItem('auth_state', JSON.stringify(authState));
      return { success: true, role: 'enrollment' };
    }
    return { success: false };
  },

  logout() {
    localStorage.removeItem('auth_state');
  },

  isAuthenticated(): boolean {
    const authState = localStorage.getItem('auth_state');
    return !!authState;
  },

  getRole(): UserRole | null {
    const authState = localStorage.getItem('auth_state');
    if (!authState) return null;
    return JSON.parse(authState).role;
  },

  hasAccess(requiredRole: UserRole): boolean {
    const role = this.getRole();
    if (!role) return false;
    if (role === 'admin') return true; // Admin has access to everything
    return role === requiredRole; // Other roles only have access to their specific areas
  }
};
