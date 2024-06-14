import { ChangeEvent, useState } from "react";
import Title from "../../Components/Title"
import * as yup from 'yup';
import * as S from "./styles"
import Button from "../../Components/Button";
import CategorySelect from "../../Components/CategorySelect";
import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { maskPhone, unmaskPhone } from "../../utils/mask";
import ImageInput from "../../Components/ImageInput";
import { TCreateImageObject } from "../../types/image-object-type";
import { createAdvert } from "../../Services/advert";
import { useAuth } from "../../Context/AuthContext";
import { createImageToAdvert } from "../../Services/images";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Services/firebase";

type TCreateAdvert = {
  name: string
  value: string
  shortDescription: string
  longDescription: string
  specificPhone?: string
  category: string
  image?: any[]
}

const createAdvertSchema = yup.object().shape({
  name: yup.string().required('O nome do anúncio deve ser passado!'),
  value: yup.string().required('Um valor deve ser informado!'),
  specificPhone: yup.string(),
  shortDescription: yup.string().max(150, 'A quantidade de caracteres não pode ultrapassar 150!').required('Uma breve descrição deve ser dada sobre o anúncio!'),
  longDescription: yup.string().required('Uma descrição mais detalhada do anúncio deve ser feita!'),
  category: yup.string().required('Uma categoria deve ser selecionada'),
});

const NewAdsense = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<TCreateAdvert>({ resolver: yupResolver(createAdvertSchema) });
  const { user } = useAuth();
  const [files, setFiles] = useState<FileList | null | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedPhone = maskPhone(e.target.value);
    setValue('specificPhone', maskedPhone);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value.replace(/[^\d]/g, '')) || 0;
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
    }).format(inputValue / 100);

    e.target.value = formattedValue;
  };

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

    if (validFiles.length > 3) {
      alert('Você só pode selecionar até 3 imagens!');
      return;
    }

    setFiles(files);
  };

  const makeImagesUpload = async (advertId: string) => {
    if (!files) return;

    const uploadPromises = Array.from(files).map((file) => {
      return new Promise<void>((resolve, reject) => {
        const imageName = `${file.name} (${new Date().toISOString()})`;
        const storageRef = ref(storage, `Images/${imageName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          (snapshot) => { },
          (error) => {
            alert(`Houve um erro na hora de fazer upload da imagem: ${file.name}!`);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await createImageToAdvert({
              advertId,
              imageStorageUrl: downloadURL,
              originalName: imageName,
            });
            resolve();
          }
        );
      });
    });

    await Promise.all(uploadPromises);
  };

  const onSubmit = handleSubmit(async ({ name, value, shortDescription, longDescription, specificPhone, category }: TCreateAdvert) => {
    const inputValue = parseFloat(value.replace(/[^\d]/g, ''));

    const body = {
      name,
      value: inputValue,
      shortDescription,
      longDescription,
      specificPhone: specificPhone ? unmaskPhone(specificPhone) : user.phone,
      category
    };

    setIsLoading(true);

    try {
      const advertRequest = await createAdvert(body);
      await makeImagesUpload(advertRequest.data.id);

      alert('Anuncio criado com sucesso, agora nossos administradores irão analisar o anúncio criado e aprová-lo!');

      setFiles(null);
      setValue('name', '');
      setValue('value', '');
      setValue('shortDescription', '');
      setValue('longDescription', '');
      setValue('category', '');
      setValue('image', []);
    } catch (err) {
      alert('Houve Algum erro na hora de criar o anúncio, tente novamente!');
      throw err;
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <Title>novo anuncio</Title>
      </S.WrapperTitle>

      <S.Form onSubmit={onSubmit}>
        <S.WrapperForm>
          <Input
            placeholder={'Informe o nome do produto'}
            type='text'
            label='Nome'
            {...register('name')}
            error={errors.name?.message}
          />
          <Input
            placeholder={"00,00"}
            type='text'
            label="Valor"
            prefix='R$'
            {...register('value', {
              onChange(e: React.ChangeEvent<HTMLInputElement>) { handleValueChange(e) },
            })}
            error={errors.value?.message}
          />
          <Input
            placeholder={"Informe um número de telefone para contato"}
            type="text"
            label="Telefone"
            {...register('specificPhone', {
              required: false,
              onChange(e: React.ChangeEvent<HTMLInputElement>) { handlePhoneChange(e) },
            })}
            error={errors.specificPhone?.message}
          />
          <Input
            placeholder={"Informe uma breve descrição"}
            type="text"
            label="Descrição Curta"
            {...register('shortDescription')}
            error={errors.shortDescription?.message}
          />
          <TextArea
            placeholder={'Informe uma descrição mais detalhada'}
            label="Descrição Longa"
            {...register('longDescription')}
            error={errors.longDescription?.message}
          />
          <S.NoInputWrapper>
            <CategorySelect
              label='Categorias'
              error={errors.category?.message}
              {...register('category')}
            />
            <ImageInput
              label="Adicione uma ou mais imagens"
              error={errors.image?.message}
              {...register('image', {
                onChange(event: ChangeEvent<HTMLInputElement>) {
                  getImagesToUpload(event.target.files);
                },
              })}
            />
          </S.NoInputWrapper>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button disabled={isLoading} size='md' variant="green">{isLoading ? 'Criando Anúncio...' : 'Criar Anúncio'}</Button>
          </div>
        </S.WrapperForm>
      </S.Form>

    </S.Wrapper>
  )
}

export default NewAdsense
