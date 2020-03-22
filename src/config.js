export const API_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://react-auth-twitter.herokuapp.com'
        : 'http://localhost:8080';
