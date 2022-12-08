import React, { useState, useEffect } from 'react';
import { ModalForm, ModalInfo } from '~/modules/linky/components/Modal';
import { List, LinkItem } from '~/modules/linky/components/List';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useRouter } from 'next/router';
import 'swiper/css';

type formDataProps = {
  name: string;
  tag: string;
  url: string;
  color: string;
  description: string;
};

function Arrow({ type = 'next' }: { type: 'prev' | 'next'}) {
  const swiper = useSwiper();

  const onArrowClick = () => {
    if (type === 'prev') swiper.slidePrev();
    else if (type === 'next') swiper.slideNext()
  };

  return (
      <button
      style={type === 'prev'? {
        transform: 'rotate(180deg)',
      }: {}}
        className='w-[34px] h-[34px] bg-primary-700 rounded-full p-[2.5px] shadow-[0px_2px_8px_1px_rgba(0,0,0,0.3)]'
        onClick={() => onArrowClick()}>
        <div className="bg-[url('../img/icons/ic_arrow-toggle.svg')] w-6 h-6 rounded-full bg-contain" />
      </button>
  );
}

export default function Linky() {
  const [ isAdmin, setIsAdmin ] = useState(true);
  const [ data, setData ] = useState({
    list: [
      {
        title: 'Lorem Ipsum',
        tag: '',
        color: 'red hex',
        url: 'go/to/url',
        description: 'test',
      },
      {
        title: 'Lorem Ipsum',
        tag: '',
        color: 'red hex',
        url: 'go/to/url',
        description: 'test',
      },
      {
        title: 'Lorem Ipsum',
        tag: '',
        color: 'red hex',
        url: 'go/to/url',
        description: 'test',
      },
      {
        title: 'Lorem Ipsum',
        tag: '',
        color: 'red hex',
        url: 'go/to/url',
        description: 'test',
      },
    ],
    paginated: [
      [
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
      ],
      [
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
        {
          title: 'Lorem Ipsum',
          tag: '',
          color: 'red hex',
          url: 'go/to/url',
          description: 'test',
        },
      ],
    ],
  });
  const router = useRouter();
  const [ currentlyEditedLinky, setCurrentlyEditedLinky ] = useState<formDataProps>({
    name: 'test',
    tag: 'test',
    url: 'test',
    color: 'red hex',
    description: 'test',
  });

  useEffect(() => {
    console.log(router.query.popup);
  }, [router.query.popup])

  const onEditLink = (id) => {
    router.push({ query: { popups: 'modal-edit' } });
  };

  const onCloseModal = (type) => {
    const filteredPopups = (router.query.popups as string)
    .split('/')
    .filter(popup => popup === type)

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

  return (
    <div className='relative mt-7'>
      {
        (router.query.popups? router.query.popups as string : '' )
        .includes('modal-delete') ? (
          <ModalInfo
            type='delete'
            onCancel={() => onCloseModal('close-modal')}
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
            onCancel={() => onCloseModal('close-modal')}
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
      >
        <div className='absolute top-[50%] z-[1] left-1'>
          <Arrow type='prev' />
        </div>
        <div className='absolute top-[50%] z-[1] right-1'>
          <Arrow type='next' />
        </div>
        {
          data.paginated.map((page, pageIdx) => {
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
                            Ini adalah paragraph
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

      <div className="hidden sm:block">
        <List>
          {
            data.list.map((linky, idx) => {
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
                Ini adalah paragraph
                </LinkItem>
              );
            })
          }
        </List>
      </div>

    </div>
  )
}
