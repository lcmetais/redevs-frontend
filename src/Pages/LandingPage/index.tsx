import { useEffect, useState } from 'react'
import Banner from '../../Components/Banner'
import CardsSection from '../../Components/CardsSection'
import { Slide, SlideProps, Slider } from '../../Components/Slider'
import { useAuth } from '../../Context/AuthContext'
import { addBanner, deleteBanner, getBanners, updateBanner } from '../../Services/admin'
import { TBanner } from '../../types/banner'
import * as S from './styles'
import Button from '../../Components/Button'
import { CiSquarePlus } from "react-icons/ci";
import Modal from '../../Components/Modal'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../Services/firebase'
import ImageInput from '../../Components/ImageInput'

const LandingPage = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [banners, setBanners] = useState<TBanner[]>([]);
  const [modalAction, setModalAction] = useState<"AddBanner" | "UpdateBanner" | ''>();
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState<FileList | null | undefined>();
  const [bannerId, setBannerId] = useState("");
  const settings: SlideProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
      type: 'bullets'
    }
  }

  const getImagesToUpload = async (files: FileList | null) => {
    if (!files) {
      alert('Nenhum arquivo selecionado!');
      return;
    }

    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'));

    if (validFiles.length === 0) {
      alert('Selecione apenas arquivos de imagem!');
      return;
    }

    if (validFiles.length > 1) {
      alert('Você só pode selecionar 1 banner!');
      return;
    }

    setFiles(files);
  };

  const makeImagesUpload = async (bannerId?: string) => {
    if (!files) return;

    const uploadPromises = Array.from(files).map((file) => {
      return new Promise<void>((resolve, reject) => {
        const bannerName = `${file.name} (${new Date().toISOString()})`;
        const storageRef = ref(storage, `Images/${bannerName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => { },
          (error) => {
            alert(`Houve um erro ao tentar adicionar o banner!`);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            if (modalAction === "AddBanner")
              await addBanner({ bannerName, bannerUrl: downloadURL });

            if (modalAction === "UpdateBanner" && bannerId)
              await updateBanner(bannerId, { newBannerName: bannerName, newBannerUrl: downloadURL })

            resolve();
          }
        );
      });
    });

    await Promise.all(uploadPromises);
  };

  const newBanner = async () => {
    setModalAction("AddBanner");
    setOpenModal(true);
  }

  useEffect(() => {
    const fetchBanners = async () => {
      setIsLoading(true);

      const allBanners = await getBanners();
      setBanners(allBanners);

      setIsLoading(false);
    }

    fetchBanners();
  }, []);

  return (
    <>
      <Slider settings={settings}>
        {
          isLoading
            ? <S.Loading />
            : banners.map((itemBanner) => {
              return (
                <Slide>
                  <S.InternalSlideWrapper>
                    <Banner url={itemBanner.bannerUrl} alt={itemBanner.bannerName} />

                    {
                      user.role === "ADMIN" && (
                        <S.ButtonsWrapper>
                          <Button onClick={() => {
                            setBannerId(itemBanner.id);
                            setModalAction("UpdateBanner");
                            setOpenModal(true);
                          }}>Atualizar banner</Button>
                          <Button onClick={async () => {
                            await deleteBanner(itemBanner.id);
                            location.reload();
                          }}>Remover banner</Button>
                        </S.ButtonsWrapper>
                      )
                    }
                  </S.InternalSlideWrapper>
                </Slide>
              )
            })
        }
        {
          user.role === "ADMIN" && (
            <Slide>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={() => newBanner()}>
                  {innerWidth >= 640 ? 'Adcionar Novo Banner' : <CiSquarePlus />}
                </Button>
              </div>
            </Slide>
          )
        }
      </Slider >
      <S.Wrapper >
        <CardsSection sectionTitle='Anúncios' />
      </S.Wrapper >

      <Modal isOpen={openModal}>
        <S.ModalWrapper>
          {
            (files && <>
              <h1>Banner Selecionado</h1>
              <S.BannerPreviewer>
                {
                  Array.from(files).map((file) => (
                    <S.BannerForPreview key={file.name} alt={file.name} src={URL.createObjectURL(file)} />
                  ))
                }
              </S.BannerPreviewer>
            </>)
          }
          <ImageInput label={"Selecionar banner"} onChange={event => getImagesToUpload(event.target.files)} />
          <S.ButtonsWrapper>
            {
              modalAction === "AddBanner" &&
              <Button onClick={async () => {
                await makeImagesUpload();
                setOpenModal(false);
                setModalAction('');
                setBannerId('');
                location.reload();
              }}>Adicionar banner</Button>
            }
            {
              modalAction === "UpdateBanner" &&
              <Button onClick={async () => {
                await makeImagesUpload(bannerId);
                setOpenModal(false);
                setModalAction('');
                setBannerId('');
                location.reload();
              }}>Atualizar banner</Button>
            }
            <Button onClick={() => {
              setOpenModal(false);
              setModalAction('');
              setBannerId('');
            }}>
              Fechar
            </Button>
          </S.ButtonsWrapper>
        </S.ModalWrapper>
      </Modal >
    </>
  )
}

export default LandingPage
