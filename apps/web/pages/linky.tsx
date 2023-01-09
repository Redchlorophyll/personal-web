import React, { useState, useEffect } from 'react';
import { ModalForm, ModalInfo } from '~/modules/linky/components/Modal';
import { List, LinkItem } from '~/modules/linky/components/List';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRouter } from 'next/router';
import ToggleMode from "@/components/ToggleMode";
import Image from 'next/image';
import Blank from '@/Layouts/Blank';
import linkyList from '@/config/LinkyList';
import ReachMeOut from '@/components/ReachMeOut';
import { Button, Input, Snackbar } from 'ui';
import { UserAuth } from '@/context/Auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import info from '@/config/info';
import 'swiper/css';

type formDataProps = {
  name: string;
  tag: string;
  url: string;
  color: string;
  description: string;
};

function Arrow({ type = 'next' }: { type: 'prev' | 'next' }) {
  const swiper = useSwiper();

  const onArrowClick = () => {
    if (type === 'prev') swiper.slidePrev();
    else if (type === 'next') swiper.slideNext();
  };

  return (
      <button
      style={type === 'prev'? {
        transform: 'rotate(180deg)',
      }: {}}
        className='w-[34px] h-[34px] h- bg-primary-700 rounded-full p-[2.5px] shadow-[0px_2px_8px_1px_rgba(0,0,0,0.3)]'
        onClick={() => onArrowClick()}>
        <div className="bg-[url('../img/icons/ic_arrow-toggle.svg')] w-6 h-6 rounded-full bg-contain" />
      </button>
  );
}

function EditButton({ onClick }: { onClick: () => void; }) {
  return (
    <button
      className='bg-black-100 w-5 h-5 rounded-full p-[5px] shadow-[0_2px_4px_rgba(0,0,0,0.25)]'
      onClick={() => onClick()}
    >
      <div className="bg-[url('../img/icons/ic_edit.svg')] w-[10px] h-[10px] bg-contain" />
    </button>
  );
}

const profileSchema = yup.object({
  name: yup.string().required(),
  note: yup.string().required(),
  facebook: yup.string().url().nullable(),
  github: yup.string().url().nullable(),
  linkedin: yup.string().url().nullable(),
  instagram: yup.string().url().nullable(),
});

function ProfileInfo({ onSuccess }: { onSuccess: () => void }) {
  const router = useRouter();
  const [ isEdit, setEdit ] = useState(false);
  const { user } = UserAuth();
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const { handleSubmit, register, formState:{ errors } } = useForm({
    defaultValues: info,
    resolver: yupResolver(profileSchema),
  });

  const onOpenEditImage = () => {
    console.log('test');
    router.push({ query: { popups: 'update-profile' } });
  };

  const onSubmitProfileForm = (formVal) => {
    console.log('error', errors)
    setIsSubmitted(true);
    console.log(formVal);
    setTimeout(() => {
      setIsSubmitted(false);
      onSuccess();
      setEdit(false);
    }, 2000);
  };

  const onOpenEditProfile = () => {
    setEdit(true);
  }

  return (
    <div className='flex md:-translate-x-[70px]'>
      <div className='mr-5'>
        {/* image */}
        <div className='w-[54px] md:w-[80px] h-[54px] md:h-[80px] rounded-full overflow-hidden bg-red-300 relative'>
          <Image fill src="https://lh3.googleusercontent.com/-vFBrzZ6Y1Uc/AAAAAAAAAAI/AAAAAAAAAAA/AFi9ZuFq8uF_OL_QsHmv3VZ9HnpInQiT5w/s48-c/photo.jpg" alt='Profile Image' />
        </div>
        {
          user !== null && Object.keys(user).length !== 0 ? (
            <div className='hidden md:block absolute translate-x-[55px] -translate-y-[20px]'>
              <EditButton onClick={() => onOpenEditImage()}  />
            </div>
          ) : ''
        }

      </div>
      <div className='md:w-[500px] transition-all'>
        {
          isEdit ? (
            <form onSubmit={handleSubmit(onSubmitProfileForm)}>
              <div className='mb-4'>
                <Input label='Name*' { ...register('name') }  errorMessage={(errors.name?.message as string)} isError={errors.name ? true : false} />
                {}
              </div>
              <div className='mb-4'>
                <Input label='Mini Note*' { ...register('note') } errorMessage={(errors.note?.message as string)} isError={errors.note ? true : false} />
              </div>
              <div className='mb-4'>
                <Input label='Social Media' { ...register('facebook') } errorMessage={(errors.facebook?.message as string)} isError={errors.facebook ? true : false} />
              </div>
              <div className='mb-4'>
                <Input placeholder='LinkedIn Url' { ...register('linkedin') } errorMessage={(errors.linkedin?.message as string)} isError={errors.linkedin ? true : false} />
              </div>
              <div className='mb-4'>
                <Input placeholder='Github Url' { ...register('github') } errorMessage={(errors.github?.message as string)} isError={errors.github ? true : false} />
              </div>
              <div className='mb-4'>
                <Input placeholder='Instagram Url' { ...register('instagram') } errorMessage={(errors.instagram?.message as string)} isError={errors.instagram ? true : false} />
              </div>

              <div className='flex mt-5'>
                <div className='mr-2'>
                  <Button btnType='submit'>
                    {
                    isSubmitted ?
                      (<div className='translate-y-[2px] inline-block pr-1'>
                        <div className="bg-[url('../img/icons/ic_loading.svg')] w-[15px] h-[15px] bg-contain animate-spin"/>
                      </div>) : ''
                    }
                    Save
                  </Button>
                </div>
                <Button variant='error' type='outline' onClick={() => setEdit(false)}>cancel</Button>
              </div>
            </form>
          ) : (
            <div>
              <div className='flex'>
                <h2 className='text-base md:!text-xl mb-1'>Dhonni Ari Hendra Saputra</h2>
                {
                  user !== null && Object.keys(user).length !== 0 ? (
                    <div className='hidden md:block translate-x-[5px] -translate-y-[10px]'>
                      <EditButton onClick={() => onOpenEditProfile()}  />
                    </div>
                  ) : ''
                }
              </div>
              <h3 className='text-sm md:!text-lg text-black-700'>Software Engineer, Looking for job!</h3>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default function Linky() {
  const { user } = UserAuth();
  const [ isAdmin, setIsAdmin ] = useState(false);
  const [ snackbarConfig, setSnackbarConfig ] = useState({
    isShown: false,
    message: '',
    variant: 'success'
  });
  const [ data, setData ] = useState(linkyList);
  const [activeSwiper, setActiveSwiper] = useState(0);
  const router = useRouter();
  const [ currentlyEditedLinky, setCurrentlyEditedLinky ] = useState<formDataProps>({
    name: 'test',
    tag: 'test',
    url: 'test',
    color: 'red',
    description: 'test',
  });

  useEffect(() => {
    console.log(router.query.popup);
  }, [router.query.popup]);

  useEffect(() => {
    setIsAdmin(user !== null && Object.keys(user).length !== 0);
  }, [user]);

  const onEditLink = (id) => {
    router.push({ query: { popups: 'modal-edit' } });
  };

  const onCreateLink = () => {
    router.push({ query: { popups: 'modal-create' } });
  };

  const onCloseModal = (type) => {
    const filteredPopups = (router.query.popups as string)
    .split(',')
    .filter(popup => popup !== type);
    console.log(filteredPopups);

    if (filteredPopups.length === 0) {
      const query = router.query;
      delete query.popups;
      router.push({ query });
      return;
    }

    router.push({ query: {popups: filteredPopups.join(',')} });
  };

  const onDeleteLink = (id) => {
    router.push({ query: { popups: 'modal-delete' } });
  };

  const onProfileUpdated = () => {
    setSnackbarConfig({
      isShown: true,
      message: 'Profile Succesfully Updated!',
      variant: 'success',
    })
  }

  const closeSnackbar = () => {
    setSnackbarConfig((val) => { return { ...val, isShown: false } });
  };

  return (
    <Blank>
      <Snackbar isShown={snackbarConfig.isShown} onClose={closeSnackbar} variant={snackbarConfig.variant}>{ snackbarConfig.message }</Snackbar>
      <div className='relative'>
        <div className='w-full md:flex md:justify-center'>
          <div className='md:w-[750px]'>
            <div className={[
              'flex justify-center p-[10px] h-16 shadow-[0_2px_8px_1px_rgba(0,0,0,0.1)]',
              'md:shadow-none md:!inline-block md:absolute md:translate-x-[633px] md:translate-y-[25px]'
            ].join(' ')}>
              <ToggleMode />
            </div>
            <div className='w-full flex justify-center mt-7'>
              <ProfileInfo onSuccess={onProfileUpdated} />
            </div>
          </div>
        </div>
      {
        (router.query.popups? router.query.popups as string : '' )
        .includes('modal-delete') ? (
          <ModalInfo
            type='delete'
            onCancel={() => onCloseModal('modal-delete')}
          />
        )
          : ''
      }

      {
        (router.query.popups? router.query.popups as string : '' )
        .includes('update-profile') ? (
          <ModalInfo
            type   ='update-profile'
            onCancel={() => onCloseModal('update-profile')}
          />
        )
          : ''
      }

      {
        (router.query.popups? router.query.popups as string : '' )
        .includes('modal-edit') ? (
          <ModalForm
            type='edit'
            value={currentlyEditedLinky}
            onCancel={() => onCloseModal('modal-edit')}
          />
        )
          : ''
      }

      {
        (router.query.popups? router.query.popups as string : '' )
        .includes('modal-create') ? (
          <ModalForm
            type='create'
            value={currentlyEditedLinky}
            onCancel={() => onCloseModal('modal-create')}
          />
        )
          : ''
      }

      <div className="block sm:hidden">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onReachBeginning={() => setActiveSwiper(0)}
        onReachEnd={() => setActiveSwiper(data.paginated.length -1)}
      >
        {
          activeSwiper !== 0 ? (
          <div className='absolute top-[50%] z-[1] left-1'>
            <Arrow type='prev' />
          </div>
          ) : ''
        }
        {
          activeSwiper !== data.paginated.length -1? (
          <div className='absolute top-[50%] z-[1] right-1'>
            <Arrow type='next' />
          </div>
          ) : ''
        }
        {
          data.paginated?.map((page, pageIdx) => {
            return (
              <SwiperSlide key={`linky-page-${pageIdx}`}>
                <List>
                  {
                    page.map((linky, linkIdx) => {
                      return (
                          <LinkItem
                            key={`linky-${pageIdx}-${linkIdx}`}
                            title={linky.title}
                            tag={linky.tag}
                            tagColor={linky.color}
                            href={linky.url}
                            edit={false}
                          >
                            { linky.description }
                          </LinkItem>
                      )
                    })
                  }
                </List>
              </SwiperSlide>
              );
            })
        }
      </Swiper>
      </div>

      <div className="hidden sm:block m-4">

        {
          isAdmin? (
            <div className='hidden sm:visible w-full md:flex justify-center'>
              <div className='w-[750px] flex justify-end'>
                <Button onClick={() => onCreateLink( )}>+ Create</Button>
              </div>
            </div>
          ) : ''
        }

        <List>
          {
            data.list?.map((linky, idx) => {
              return (
                <LinkItem
                  key={`link-${idx}`}
                  title={linky.title}
                  tag={linky.tag}
                  tagColor={linky.color}
                  href={linky.url}
                  onEdit={() => onEditLink('linky1')}
                  onDelete={() => onDeleteLink('linky1')}
                  edit={isAdmin}
                >
                  { linky.description }
                </LinkItem>
              );
            })
          }
        </List>
      </div>
      </div>

      <div className='flex justify-center w-full h-[20vh] pt-4 mb-48'>
        <ReachMeOut />
      </div>

      <footer className='text-xs md:text-base relative bottom-5 w-full text-center text-[#acacac]'>copyright @ Dhonni Ari Hendra Saputra</footer>
    </Blank>
  )
}
