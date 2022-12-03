import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyPage from "@/pages/404";
import { Provider } from "react-redux";
import { store } from "@/store";

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

const useRouter = jest.spyOn(require('next/router'), "useRouter");

describe('component - navbar', () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "",
    query: "",
    asPath: "/",
    push,
    back,
  }));

  test('it should render properly', () => {
    render(
    <Provider store={store}>
      <EmptyPage />
    </Provider>);

    const target = screen.getByText('OOPS! Page Not Found');

    expect(target).toBeInTheDocument();
  });

});