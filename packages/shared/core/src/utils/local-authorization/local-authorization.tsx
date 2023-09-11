import { User } from 'firebase/auth';

function isUserAuthorized(user: User) {
  if (user === null) return false;
  if (
    user.displayName === 'Dhonni Ari' &&
    user.email === 'dahs.workspaces@gmail.com'
  ) {
    return true;
  }
  return false;
}

export { isUserAuthorized };
