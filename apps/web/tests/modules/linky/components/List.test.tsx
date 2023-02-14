import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import List "@/modules/linky/components/List";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe('modules - linky - components - List', () => {
  test('it should render properly', () => {
    render(
    <List
      title='title 1'
      tag="title"
      tagColor="#12312"
      href="dahs.vercel.com"
      desc="lorem ipsum"
      edit={false}
    >
      Description
    </List>);

    const target = screen.getByText('title 1');
    expect(target).toBeInTheDocument();
  });
});