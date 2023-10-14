interface isUserAuthorizedInterface {
  displayName: string;
  email: string;
}

const isUserAuthorized = (user: isUserAuthorizedInterface) => {
  if (user === null) return false;
  if (
    user.displayName === 'Dhonni Ari' &&
    user.email === 'dahs.workspaces@gmail.com'
  ) {
    return true;
  }
  return false;
};

export { isUserAuthorized };
