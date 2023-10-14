import { isUserAuthorized } from './local-authorization';

describe('isUserAuthorized', () => {
  it('should return true in isUserAuthorized', () => {
    const output = isUserAuthorized({
      displayName: 'Dhonni Ari',
      email: 'dahs.workspaces@gmail.com',
    });

    expect(output).toMatchInlineSnapshot(`true`);
  });
});
