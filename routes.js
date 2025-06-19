
// Routes allowed for logged out users
// Does not require authentication
export const publicRoutes = [
    "/",
    "/auth/new-verification"
];


// Routes for authentication
// These routes will redirect to Inner Landing Page (Settings)
export const authRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/error",
];


// Prefix for API Authentication
// Routes that starts with this will be used for API Authentication

export const apiAuthPrefix = [
    "/api/auth"
];


// Redirect URL 
export const DEFAULT_LOGIN_REDIRECT = "/home";