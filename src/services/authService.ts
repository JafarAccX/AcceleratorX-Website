const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const BLOG_USER_EMAIL = import.meta.env.VITE_BLOG_USER_EMAIL;
const BLOG_USER_PASSWORD = import.meta.env.VITE_BLOG_USER_PASSWORD;
const PERFORMANCE_MARKETER_EMAIL = import.meta.env.VITE_PERFORMANCE_MARKETER_EMAIL;
const PERFORMANCE_MARKETER_PASSWORD = import.meta.env.VITE_PERFORMANCE_MARKETER_PASSWORD;

if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !BLOG_USER_EMAIL || !BLOG_USER_PASSWORD || !PERFORMANCE_MARKETER_EMAIL || !PERFORMANCE_MARKETER_PASSWORD) {
  throw new Error('Missing admin, sales, enrollment, blog user, AD, workshop viewer, or performance marketer credentials in environment variables');
}

export type UserRole = 'admin' | 'sales' | 'enrollment' | 'blog_user' | 'ad1' | 'ad2' | 'workshop_viewer' | 'performance_marketer';

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
    if (email === BLOG_USER_EMAIL && password === BLOG_USER_PASSWORD) {
      const authState: AuthState = { token: 'blog_user_authenticated', role: 'blog_user' };
      localStorage.setItem('auth_state', JSON.stringify(authState));
      return { success: true, role: 'blog_user' };
    }
    if (email === PERFORMANCE_MARKETER_EMAIL && password === PERFORMANCE_MARKETER_PASSWORD) {
      const authState: AuthState = { token: 'performance_marketer_authenticated', role: 'performance_marketer' };
      localStorage.setItem('auth_state', JSON.stringify(authState));
      return { success: true, role: 'performance_marketer' };
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

  hasAccess(requiredRole: UserRole | UserRole[]): boolean {
    const role = this.getRole();
    if (!role) return false;
    if (role === 'admin') return true; // Admin has access to everything
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(role);
    }
    if (role === 'workshop_viewer' && requiredRole === 'workshop_viewer') return true; // Workshop viewers can only access workshop details
    if (role === 'blog_user' && requiredRole === 'blog_user') return true; // Blog users can only access blog features
    if (role === 'performance_marketer' && requiredRole === 'performance_marketer') return true; // Performance marketers can only access workshop details
    return role === requiredRole; // Other roles only have access to their specific areas
  }
};
