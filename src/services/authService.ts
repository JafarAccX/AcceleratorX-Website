
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  throw new Error('Missing admin credentials in environment variables');
}

export const authService = {
  async login(email: string, password: string) {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('blog_auth_token', 'admin_authenticated');
      return true;
    }
    return false;
  },

  logout() {
    localStorage.removeItem('blog_auth_token');
  },

  isAuthenticated() {
    return localStorage.getItem('blog_auth_token') === 'admin_authenticated';
  }
};
