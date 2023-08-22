import { render } from '@testing-library/react';
import { ReachMeOut } from './reach-me-out';

describe('<ReachMeOut />', () => {
  test('should render properly', () => {
    const { baseElement } = render(
      <ReachMeOut
        socialMedia={{
          name: 'Dhonni Ari Hendra Saputra',
          note: 'Software Engineer - Frontend',
          github: 'https://github.com/Redchlorophyll',
          email: 'dhonni.hendra@gmail.com',
          facebook: 'https://www.facebook.com/DAHS381D/',
          instagram: 'https://www.instagram.com/lorddahs/',
          linkedin: 'https://www.linkedin.com/in/dhonni-ari-hendra-saputra/',
        }}
      />
    );

    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
