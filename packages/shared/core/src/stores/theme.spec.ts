import { themeSlice } from './theme';

describe('tests for ListSlice', () => {
  test('initialize slice with initialValue', () => {
    const listSliceInit = themeSlice.reducer(
      { theme: 'light' },
      { type: 'unknown' }
    );

    expect(listSliceInit).toMatchInlineSnapshot(`
      {
        "theme": "light",
      }
    `);
  });

  it('should toggle to light theme', () => {
    const nextState = themeSlice.reducer(
      { theme: 'dark' },
      themeSlice.actions.toggleLight()
    );
    expect(nextState.theme).toEqual('light');
  });
});
