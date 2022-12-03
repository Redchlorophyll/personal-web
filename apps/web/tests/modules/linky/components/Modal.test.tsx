import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { ModalForm, ModalInfo } from "~/modules/linky/components/Modal";

function ModalWrapper() {
  const [formData, setFormData] = useState({ name: '', tag: '', color: '', description: '' });
  const [showModal, setShowModal] = useState<string>('');
  const onToggleModal = (type: 'create' | 'edit' | 'update' | 'delete' | 'close', event: 'open' | 'close') => {
    if (event === 'open') setShowModal(type);
    else if (event === 'close') setShowModal('');
  }
  const onSubmit = (val) => {
    setFormData(val);
    onToggleModal('close', 'close');
  };

  return (
    <div>
      <ul>

      {
        Object.keys(formData).map((key, idx) => {
          return (<li key={idx}>{ key } : { formData[key] }</li>);
        })
      }
      </ul>
      {
        showModal === 'create' || showModal === 'edit' ? (<ModalForm type={showModal} />)
        : (<ModalInfo onSubmit={(val) => {setFormData(val)}} />)
      }
      <button onClick={() => onToggleModal('create', 'open')}>Show Modal Create</button>
      <button onClick={() => onToggleModal('edit', 'open')}>Show Modal Edit</button>
      <button onClick={() => onToggleModal('delete', 'open')}>Show Modal Delete</button>
      <button onClick={() => onToggleModal('update', 'open')}>Show Modal Update</button>
    </div>
  );
}

describe('modules - linky - components - modal - ModalForm', () => {
  test('it should not show modals', () => {
    render(<ModalWrapper />);

    const target1 = screen.queryByText('Create Linky');
    const target2 = screen.queryByText('Edit Linky');


    expect(target1).not.toBeInTheDocument();
    expect(target2).not.toBeInTheDocument();
  });

  test('it should show modal create', async () => {
    const user = userEvent.setup();
    render(<ModalWrapper />);

    const btnShowCreate =  screen.getByRole('button', { name: 'Show Modal Create' });

    await user.click(btnShowCreate);
    expect(screen.queryByText('Create Linky')).toBeInTheDocument();
  });

  test('it should show modal create', async () => {
    const user = userEvent.setup();
    render(<ModalWrapper />);

    const btnShowCreate =  screen.getByRole('button', { name: 'Show Modal Create' });

    await user.click(btnShowCreate);
    expect(screen.queryByText('Create Linky')).toBeInTheDocument();
  });

  test('it should have correct behaviour in create data', async () => {
    const user = userEvent.setup();
    render(<ModalWrapper />);

    const btnShowCreate =  screen.getByRole('button', { name: 'Show Modal Create' });

    await user.click(btnShowCreate);
    expect(screen.queryByText('Create Linky')).toBeInTheDocument();

    // make sure for button to have disabled state.check it by looking at button color.
    const buttonBefore = screen.getByRole('button', { name: 'Create' });
    expect(buttonBefore).toHaveStyle({ backgroundColor: '#aaaaaa' });

    await user.click(buttonBefore);
    expect(screen.queryByText('Create Linky')).toBeInTheDocument();

    const inputName = screen.getByAltText('Input name here...');
    const inputLink =  screen.getByAltText('Input tag name here...');
    const inputTag =  screen.getByAltText('Input link here...');
    const inputDesc =  screen.getByAltText('Describe link here...');
    const inputColor = screen.getByAltText('Select...');

    await user.type(inputName, "Link header");
    await user.type(inputLink, "https://dahs.vercel.com");
    await user.type(inputTag, "big news");
    await user.type(inputDesc, "Lorem Ipsum dolor sit amet");

    await user.click(inputColor);
    const selectedOpt = screen.getByText("Red");
    await user.click(selectedOpt);

    // make sure for button is enabled after all form been filled.
    const buttonAfter = screen.getByRole('button', { name: 'Create' });
    expect(buttonAfter).toHaveStyle({ backgroundColor: '#406fcb' });

    await user.click(buttonBefore);
    expect(screen.queryByText('Create Linky')).not.toBeInTheDocument();


  });

  test('it should show modal Edit', async () => {
    const user = userEvent.setup();
    render(<ModalWrapper />);

    const btnShowCreate =  screen.getByRole('button', { name: 'Show Modal Create' });

    await user.click(btnShowCreate);
    expect(screen.queryByText('Edit Linky')).toBeInTheDocument();
  });
});

describe('modules - linky - components - modal - ModalForm', () => {
  test('it should not show modals', () =>  {
    render(<ModalWrapper />);

    const target1 = screen.queryByText('Are You Sure Want to Delete this Linky?');
    const target2 = screen.queryByText('Are You Sure Want to Change Your Profile Picture');

    expect(target1).not.toBeInTheDocument();
    expect(target2).not.toBeInTheDocument();
  });

  test('it should not show modals', async () =>  {
    const user = userEvent.setup();
    render(<ModalWrapper />);

    const btnShowUpdate =  screen.getByRole('button', { name: 'Show Modal Update' });
    await user.click(btnShowUpdate);
    const target1 = screen.queryByText('Are You Sure Want to Delete this Linky?');
    expect(target1).toBeInTheDocument();
    const btnCloseUpdate = screen.getByRole('button', { name: 'Delete' });
    expect(btnCloseUpdate).not.toBeInTheDocument();

    const btnShowDelete =  screen.getByRole('button', { name: 'Show Modal Delete' });
    await user.click(btnShowUpdate);
    const target2 = screen.queryByText('Are You Sure Want to Change Your Profile Picture');
    expect(target2).toBeInTheDocument();
    const btnCloseDelete = screen.getByRole('button', { name: 'Yes' });

    expect(target2).not.toBeInTheDocument();
  });
});