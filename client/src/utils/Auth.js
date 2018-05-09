class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage.
   * Also, save the user role needed for routing.
   *
   * @param {string} token
   * @param {string} role
   */
  static authenticateUser(token, role) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Check if a user is an athlete.
   *
   * @returns {boolean}
   */
  static isUserAnAthlete() {
    return localStorage.getItem('role') === 'athlete';
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Get a role (coach/athlete) value.
   *
   * @returns {string}
   */

  static getRole() {
    return localStorage.getItem('role');
  }

}

export default Auth;
