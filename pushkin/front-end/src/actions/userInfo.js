export const GOT_SESSION_USER = 'GOT_SESSION_USER';
export const GET_SESSION_USER = 'GET_SESSION_USER';

export function getSessionUser() {
  return {
    type: GET_SESSION_USER
  };
}
