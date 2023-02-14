import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  List,
  LinkItem,
  LoadingLinkItem,
} from "~/modules/linky/components/List";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useRouter } from "next/router";
import ToggleMode from "@/components/ToggleMode";
import Image from "next/image";
import Blank from "~/layouts/Blank";
import linkyList from "@/config/LinkyList";
import ReachMeOut from "@/components/ReachMeOut";
import { Button } from "ui";
import { UserAuth } from "@/context/Auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import info from "@/config/info";
import "swiper/css";

const Snackbar = dynamic(() => import("ui").then((mod) => mod.Snackbar), {
  ssr: false,
});
const Input = dynamic(() => import("ui").then((mod) => mod.Input));
const ModalForm = dynamic(() =>
  import("~/modules/linky/components/Modal").then((mod) => mod.ModalForm)
);
const ModalInfo = dynamic(() =>
  import("~/modules/linky/components/Modal").then((mod) => mod.ModalInfo)
);

type formDataProps = {
  title: string;
  tag: string;
  url: string;
  color: string;
  description: string;
};

type infoType = {
  name: string;
  note: string;
  github: string;
  email: string;
  facebook: string;
  instagram: string;
  linkedin: string;
};

type profileDataType = {
  image: string;
  info: infoType;
};

function Arrow({ type = "next" }: { type: "prev" | "next" }) {
  const swiper = useSwiper();

  const onArrowClick = () => {
    if (type === "prev") swiper.slidePrev();
    else if (type === "next") swiper.slideNext();
  };

  return (
    <button
      style={
        type === "prev"
          ? {
              transform: "rotate(180deg)",
            }
          : {}
      }
      aria-label={type}
      className="w-[34px] h-[34px] h- bg-primary-700 rounded-full p-[2.5px] shadow-[0px_2px_8px_1px_rgba(0,0,0,0.3)]"
      onClick={() => onArrowClick()}
    >
      <div className="bg-[url('../img/icons/ic_arrow-toggle.svg')] w-6 h-6 rounded-full bg-contain" />
    </button>
  );
}

function EditButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-black-100 w-5 h-5 rounded-full p-[5px] shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
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
  test: yup.string(),
});

function ProfileInfo({
  onSuccess,
  onUploadImage,
  imageUrl,
  profileData,
}: {
  onSuccess: () => void;
  onUploadImage: () => void;
  imageUrl: string;
  profileData: infoType;
}) {
  const router = useRouter();

  const [isEdit, setEdit] = useState(false);
  const { user } = UserAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...profileData,
    },
    resolver: yupResolver(profileSchema),
  });

  const onSubmitProfileForm = (formVal) => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onSuccess();
      setEdit(false);
    }, 2000);
  };

  return (
    <div className="flex md:-translate-x-[70px]">
      <div className="mr-5">
        {/* image */}
        <div className="w-[54px] md:w-[80px] h-[54px] md:h-[80px] rounded-full overflow-hidden bg-red-300 relative">
          <Image fill src={imageUrl} alt="Profile Image" quality={40} />
        </div>
        {user !== null && Object.keys(user).length !== 0 ? (
          <div className="hidden md:block absolute translate-x-[55px] -translate-y-[20px]">
            <EditButton onClick={() => onUploadImage()} />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="md:w-[500px] transition-all">
        {isEdit ? (
          <form onSubmit={handleSubmit(onSubmitProfileForm)}>
            <div className="mb-4">
              <Input
                label="Name*"
                register={register("name")}
                errorMessage={errors.name?.message as string}
                isError={errors.name ? true : false}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Mini Note*"
                errorMessage={errors.note?.message as string}
                isError={errors.note ? true : false}
                register={register("note")}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Social Media"
                register={register("facebook")}
                errorMessage={errors.facebook?.message as string}
                isError={errors.facebook ? true : false}
              />
            </div>
            <div className="mb-4">
              <Input
                placeholder="LinkedIn Url"
                register={register("linkedin")}
                errorMessage={errors.linkedin?.message as string}
                isError={errors.linkedin ? true : false}
              />
            </div>
            <div className="mb-4">
              <Input
                placeholder="Github Url"
                register={register("github")}
                errorMessage={errors.github?.message as string}
                isError={errors.github ? true : false}
              />
            </div>
            <div className="mb-4">
              <Input
                placeholder="Instagram Url"
                register={register("instagram")}
                errorMessage={errors.instagram?.message as string}
                isError={errors.instagram ? true : false}
              />
            </div>

            <div className="flex mt-5">
              <div className="mr-2">
                <Button btnType="submit">
                  {isSubmitted ? (
                    <div className="translate-y-[2px] inline-block pr-1">
                      <div className="bg-[url('../img/icons/ic_loading.svg')] w-[15px] h-[15px] bg-contain animate-spin" />
                    </div>
                  ) : (
                    ""
                  )}
                  Save
                </Button>
              </div>
              <Button
                variant="error"
                type="outline"
                onClick={() => setEdit(false)}
              >
                cancel
              </Button>
            </div>
          </form>
        ) : (
          <div>
            <div className="flex">
              <h2 className="text-base md:!text-xl mb-1">
                {getValues("name")}
              </h2>
              {user !== null && Object.keys(user).length !== 0 ? (
                <div className="hidden md:block translate-x-[5px] -translate-y-[10px]">
                  <EditButton onClick={() => setEdit(true)} />
                </div>
              ) : (
                ""
              )}
            </div>
            <h3 className="text-sm md:!text-lg text-black-700">
              {getValues("note")}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Linky() {
  const { user } = UserAuth();
  const inputProfileImageRef = useRef(null);
  const [profileData, setProfileData] = useState<profileDataType>({
    image:
      "https://media.licdn.com/dms/image/D5603AQGnGKppkU2ZRw/profile-displayphoto-shrink_800_800/0/1673371446943?e=1681948800&v=beta&t=7NELWDvP-I3OgXRgwY6a4CqdDQI3qDXCMyAii9xNc7g",
    info,
  });
  const [isFetching, setIsFetching] = useState(true); //dummy until API Exists
  const [isAdmin, setIsAdmin] = useState(false);
  const [snackbarConfig, setSnackbarConfig] = useState<{
    isShown: boolean;
    message: string;
    variant: "error" | "info" | "success" | "warning";
  }>({
    isShown: false,
    message: "",
    variant: "success",
  });
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [data, setData] = useState(linkyList);
  const [activeSwiper, setActiveSwiper] = useState(0);
  const router = useRouter();
  const [currentlyEditedLinky, setCurrentlyEditedLinky] =
    useState<formDataProps>({
      title: "",
      tag: "",
      url: "",
      color: "",
      description: "",
    });

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setIsAdmin(user !== null && Object.keys(user).length !== 0);
  }, [user]);

  useEffect(() => {
    if (router.query["linky-id"]) {
      const linkyId = parseInt(router.query["linky-id"] as string, 10);
      setCurrentlyEditedLinky(data.list[linkyId]);
    }
  }, [router.query]);

  const onOpenEditModal = (id: number) => {
    setCurrentlyEditedLinky(data.list[id]);
    router.push({ query: { popups: "modal-edit", "linky-id": id } });
  };

  const onCreateLink = () => {
    // clear all data before opening modal
    setCurrentlyEditedLinky({
      title: "",
      tag: "",
      url: "",
      color: "",
      description: "",
    });

    // opening modal by create new url params
    router.push({ query: { popups: "modal-create" } });
  };

  const onCloseModal = (type) => {
    const filteredPopups = (router.query.popups as string)
      .split(",")
      .filter((popup) => popup !== type);

    if (filteredPopups.length === 0) {
      const query = router.query;
      delete query.popups;
      router.push({ query });
      return;
    }

    router.push({ query: { popups: filteredPopups.join(",") } });
  };

  const onOpenDeleteModal = (id) => {
    router.push({ query: { popups: "modal-delete", "linky-id": id } });
  };

  const onDeleteLinky = () => {
    const tmpData = data;
    tmpData.list.splice(parseInt(router.query["linky-id"] as string, 10), 1);
    setData(tmpData);

    onCloseModal("modal-delete");

    setSnackbarConfig({
      isShown: true,
      message: "Successfully Delete Linky!",
      variant: "success",
    });
  };

  const onProfileUpdated = () => {
    setSnackbarConfig({
      isShown: true,
      message: "Profile Succesfully Updated!",
      variant: "success",
    });
  };

  const onUploadImage = () => {
    if (inputProfileImageRef) inputProfileImageRef.current.click();
  };

  const onFileChangeCapture = (e: ChangeEvent<HTMLInputElement>) => {
    router.push({ query: { popups: "update-profile" } });
    setImageFile(e.target.files[0]);
  };

  const closeSnackbar = () => {
    setSnackbarConfig((val) => {
      return { ...val, isShown: false };
    });
  };

  const onSubmitEditLinky = (val: formDataProps) => {
    const linkyId = parseInt(router.query["linky-id"] as string, 10);
    const tmpData = data;
    tmpData.list[linkyId] = val;
    setData(tmpData);
    onCloseModal("modal-edit");

    setSnackbarConfig({
      isShown: true,
      message: "Sucessfully Edit Linky!",
      variant: "success",
    });
  };

  const onSubmitCreateLinky = (val: formDataProps) => {
    const tmpData = data;
    tmpData.list.push(val);
    setData(tmpData);
    onCloseModal("modal-create");

    setSnackbarConfig({
      isShown: true,
      message: "Sucessfully Create Linky!",
      variant: "success",
    });
  };

  const onSubmitUpdateProfile = () => {
    const tmpUrl = URL.createObjectURL(imageFile);
    setProfileData((val) => ({ ...val, image: tmpUrl }));

    onCloseModal("update-profile");

    setSnackbarConfig({
      isShown: true,
      message: "Profile Picture Succesfully Updated!",
      variant: "success",
    });
  };

  return (
    <>
      <Head>
        <title>Linky - Dhonni Ari Hendra Saputra</title>
        <meta
          name="description"
          content="Linky page is Dhonni's tool aim to gather important link and highlight it easier and faster"
        />
        <meta
          property="og:image"
          content="https://dahs.vercel.app/banner.jpg"
        />
        <meta
          property="og:description"
          content="Linky page is Dhonni's tool aim to gather important link and highlight it easier and faster"
        />
        <meta property="og:title" content="Linky - Dhonni Ari Hendra Saputra" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Linky - Dhonni Ari Hendra Saputra"
        />
        <meta
          name="twitter:description"
          content="Linky page is Dhonni's tool aim to gather important link and highlight it easier and faster"
        />
        <meta
          name="twitter:image"
          content="https://dahs.vercel.app/banner.jpg"
        />
      </Head>
      <Blank>
        <Snackbar
          isShown={snackbarConfig.isShown}
          onClose={closeSnackbar}
          variant={snackbarConfig.variant}
        >
          {snackbarConfig.message}
        </Snackbar>
        <div className="relative">
          <section className="w-full md:flex md:justify-center">
            <div className="md:w-[750px]">
              <div
                className={[
                  "flex justify-center p-[10px] h-16 shadow-[0_2px_8px_1px_rgba(0,0,0,0.1)]",
                  "md:shadow-none md:!inline-block md:absolute md:translate-x-[633px] md:translate-y-[25px]",
                ].join(" ")}
              >
                <ToggleMode />
              </div>
              <div className="w-full flex justify-center mt-7">
                <ProfileInfo
                  onSuccess={onProfileUpdated}
                  onUploadImage={onUploadImage}
                  imageUrl={profileData.image}
                  profileData={profileData.info}
                />
                <input
                  className="hidden"
                  type="file"
                  accept="image/png, image/jpeg"
                  ref={inputProfileImageRef}
                  onChange={(event) => onFileChangeCapture(event)}
                />
              </div>
            </div>
          </section>

          {(router.query.popups
            ? (router.query.popups as string)
            : ""
          ).includes("modal-delete") ? (
            <ModalInfo
              type="delete"
              onSubmit={() => onDeleteLinky()}
              onCancel={() => onCloseModal("modal-delete")}
            />
          ) : (
            ""
          )}

          {(router.query.popups
            ? (router.query.popups as string)
            : ""
          ).includes("update-profile") ? (
            <ModalInfo
              type="update-profile"
              onSubmit={() => onSubmitUpdateProfile()}
              onCancel={() => onCloseModal("update-profile")}
            />
          ) : (
            ""
          )}

          {(router.query.popups
            ? (router.query.popups as string)
            : ""
          ).includes("modal-edit") ? (
            <ModalForm
              type="edit"
              value={currentlyEditedLinky}
              onSubmit={(val) => onSubmitEditLinky(val)}
              onCancel={() => onCloseModal("modal-edit")}
            />
          ) : (
            ""
          )}

          {(router.query.popups
            ? (router.query.popups as string)
            : ""
          ).includes("modal-create") ? (
            <ModalForm
              type="create"
              value={currentlyEditedLinky}
              onSubmit={(val) => onSubmitCreateLinky(val)}
              onCancel={() => onCloseModal("modal-create")}
            />
          ) : (
            ""
          )}

          {!isFetching ? (
            <>
              {/* mobile view */}
              <div className="block sm:hidden">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  onReachBeginning={() => setActiveSwiper(0)}
                  onReachEnd={() => setActiveSwiper(data.paginated.length - 1)}
                >
                  {activeSwiper !== 0 ? (
                    <div className="absolute top-[50%] z-[1] left-1">
                      <Arrow type="prev" />
                    </div>
                  ) : (
                    ""
                  )}
                  {activeSwiper !== data.paginated.length - 1 ? (
                    <div className="absolute top-[50%] z-[1] right-1">
                      <Arrow type="next" />
                    </div>
                  ) : (
                    ""
                  )}
                  {data.paginated?.map((page, pageIdx) => {
                    return (
                      <SwiperSlide key={`linky-page-${pageIdx}`}>
                        <List>
                          {page.map((linky, linkIdx) => {
                            return (
                              <LinkItem
                                key={`linky-${pageIdx}-${linkIdx}`}
                                title={linky.title}
                                tag={linky.tag}
                                tagColor={linky.color}
                                href={linky.url}
                                edit={false}
                              >
                                {linky.description}
                              </LinkItem>
                            );
                          })}
                        </List>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <section className="hidden sm:block m-4">
                {isAdmin ? (
                  <div className="hidden sm:visible w-full md:flex justify-center">
                    <div className="w-[750px] flex justify-end">
                      <Button onClick={() => onCreateLink()}>+ Create</Button>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <List>
                  {data.list?.map((linky, idx) => {
                    return (
                      <LinkItem
                        key={`link-${idx}`}
                        title={linky.title}
                        tag={linky.tag}
                        tagColor={linky.color}
                        href={linky.url}
                        onEdit={() => onOpenEditModal(idx)}
                        onDelete={() => onOpenDeleteModal(idx)}
                        edit={isAdmin}
                      >
                        {linky.description}
                      </LinkItem>
                    );
                  })}
                </List>
              </section>
            </>
          ) : (
            <div>
              <List>
                <LoadingLinkItem />
                <LoadingLinkItem />
                <LoadingLinkItem />
                <LoadingLinkItem />
              </List>
            </div>
          )}
        </div>

        <section className="flex justify-center w-full h-[20vh] pt-4 mb-48">
          <ReachMeOut />
        </section>

        <footer className="text-xs md:text-base relative bottom-5 w-full text-center text-[#acacac]">
          copyright @ Dhonni Ari Hendra Saputra
        </footer>
      </Blank>
    </>
  );
}
