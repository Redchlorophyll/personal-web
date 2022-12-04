import React, { useState, useEffect } from 'react';
import { Modal, Input, Textarea, Button, Dropdown } from 'ui';
import Image from 'next/image';
import iluDelete from 'assets/img/ilustrations/ilu_delete-linky.svg';
import iluUpdate from 'assets/img/ilustrations/ilu_update-profile.svg';

type formDataProps = {
  name: string;
  tag: string;
  url: string;
  color: string;
  description: string;
};

type ModalFormProps = {
  formData?: formDataProps;
  type?: 'edit' | 'create';
  onSubmit?: (val: formDataProps) => void;
};

type ModalInfoProps = {
  type?: 'delete' | 'update-profile';
  onSubmit?: () => void;
};

export function ModalForm({
  formData,
  type = 'create',
  onSubmit
}: ModalFormProps) {
  const [ inputData, setInputData ] = useState<formDataProps>({
    name: '',
    url: '',
    tag: '',
    color: 'red hex',
    description: '',
    ...formData
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const options = [
    { label: 'Red', value: 'red hex' },
    { label: 'Blue', value: 'blue hex' },
    { label: 'Green', value: 'green hex' },
    { label: 'Yellow', value: 'yellow hex' },
  ];

  const onInputChange = (val, label) => {
    let value = val
    if (label === 'color') value = val.value;
    setInputData(prevState => ({
      ...prevState,
      [label]: value,
    }));
  };

  const onBtnCreateClick = () => {
    if (isBtnDisabled) return;
    // TODO: HIT API CREATE
    onSubmit(inputData);
  };

  useEffect(() => {
    if (
      inputData.name.length === 0
      || inputData.name.length === 0
      || inputData.url.length === 0
      || inputData.tag.length === 0
      || inputData.color.length === 0
      || inputData.description.length === 0
    ) setIsBtnDisabled(true);
    else setIsBtnDisabled(false)
  }, [inputData]);


  return (
    <Modal
      style={{ minHeight: '150px' }}
      title={ type === 'create'? 'Create Linky' : 'Edit Linky' }
    >
      <div>
        <div className='w-[300px]'>
            <Input
              label="Name*"
              value={inputData.name}
              onChange={(val) =>
              onInputChange(val, 'name')}
              placeholder='Input Name Here...'
            />
          </div>
          <div className='w-[300px]'>
            <Input
              label="Link*"
              value={inputData.url}
              onChange={(val) =>
              onInputChange(val, 'url')}
              placeholder='Input Link Here...'
            />
          </div>
          <div className='flex gap-5'>
          <div className='w-[300px]'>
            <Input
              label="Tag*"
              value={inputData.tag}
              onChange={(val) =>
              onInputChange(val, 'tag')}
              placeholder='Input Tag Name Here...'
            />
            </div>
            <div className='w-[240px]'>
              <Dropdown
                options={options}
                onChange={(val) =>
                onInputChange(val, 'color')}
                label="color"
                value={inputData.color}
                placeholder="Select..."
              />
            </div>
          </div>
      </div>
      <Textarea
        label="Description"
        placeholder='Describe link here...'
        value={inputData.description}
        onChange={(val) => onInputChange(val, 'description')}
      />
      <div className='pt-7 flex gap-5'>
        <Button
          variant={isBtnDisabled? 'muted' : 'primary'}
          onClick={() => onBtnCreateClick()}
        >Create</Button>
        <Button variant='error' type='outline'>cancel</Button>
      </div>
    </Modal>
  )
}

export function ModalInfo({
  type = 'delete',
  onSubmit
}: ModalInfoProps) {
  const onModalSubmit = () => {
    // TODO: HIT Respective API
    onSubmit();
  };
  return (
    <Modal style={{ minHeight: '150px', width: '450px' }}>
      <div className='flex justify-center flex-col'>
        <span className='w-full text-center font-bold text-base'>{
          type === 'delete'?
          'Are You Sure Want to Delete this Linky?'
          : 'Are You Sure Want to Change Your Profile Picture'
        }</span>
        <div className='flex justify-center pt-7'>
          <Image
            width={220}
            src={type === 'delete'? iluDelete : iluUpdate}
            alt={type === 'delete'? 'Delete Linky Illustration' : 'Update Profile Illustration'} />
        </div>
        <p className='w-full text-center pt-5'>{ type === 'delete'? 'deleted linky would not be able to Recover.'
            : 'Are You Sure Want to update profile picture?'
        }</p>
        <div className='pt-7 flex gap-5 justify-center'>
          <Button
            variant='primary'
            onClick={() => onModalSubmit()}
          >{ type === 'delete'? 'Delete' : 'Yes' }</Button>
          <Button variant='error' type='outline'>Cancel</Button>
        </div>
      </div>
    </Modal>
  )
}
