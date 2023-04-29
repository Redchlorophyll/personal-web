import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkItem } from '@/modules/linky/components/List';

describe('modules - linky - components - List', () => {
  test('it should render properly', () => {
    render(
      <LinkItem
        title="title 1"
        tag="title"
        tagColor="#12312"
        href="dahs.vercel.com"
        edit={false}
      >
        Description
      </LinkItem>
    );

    const target = screen.getByText('title 1');
    expect(target).toBeInTheDocument();
  });
});
