import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '@/layouts';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'shared-core';

jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: (...props) => {
    const dynamicModule = jest.requireActual('next/dynamic');
    const dynamicActualComp = dynamicModule.default;
    const RequiredComponent = dynamicActualComp(props[0]);
    RequiredComponent.preload
      ? RequiredComponent.preload()
      : RequiredComponent.render.preload();
    return RequiredComponent;
  },
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const push = jest.fn();
const back = jest.fn();

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('component - navbar', () => {
  useRouter.mockImplementation(() => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '/',
    push,
    back,
  }));

  test('it should render properly', async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Layout backButton>content</Layout>
      </Provider>
    );

    const home = screen.getByText('Home');
    const blog = screen.getByText('Blog');
    const project = screen.getByText('Project');
    const aboutMe = screen.getByText('About Me');
    const pageContent = screen.getByText('content');
    const target = screen.getByAltText('back icon');

    expect(home).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(project).toBeInTheDocument();
    expect(aboutMe).toBeInTheDocument();
    expect(pageContent).toBeInTheDocument();

    await user.click(target);
    expect(back).toHaveBeenCalledTimes(1);
  });
});
