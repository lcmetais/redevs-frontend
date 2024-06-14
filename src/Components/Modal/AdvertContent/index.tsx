import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { updateAdvert } from '../../../Services/advert';
import { TImageObject } from '../../../types/image-object-type';
import { maskPhone, unmaskPhone } from '../../../utils/mask';
import Button from '../../Button';
import CategorySelect from '../../CategorySelect';
import CloseModal from '../../Icons/CloseModal';
import ImageSlider from '../../ImageSlider';
import Input from '../../Input';
import TextArea from '../../TextArea';
import Title from '../../Title';
import * as S from './styles';

type TAdvertContentProp = {
    idProp: string
    imageProp: TImageObject[]
    nameProp: string
    valueProp: number
    shortDescriptionProp: string
    longDescriptionProp: string
    specificPhoneProp: string
    categoryProp: string
    setIsOpen: (state: boolean) => void
    isOnlyRead?: boolean
    isEditable?: boolean
}

type TUpdateAdvert = {
    name?: string
    value?: string
    shortDescription?: string
    longDescription?: string
    specificPhone?: string
    category?: string
}

const updateAdvertSchema = yup.object().shape({
    name: yup.string(),
    value: yup.string(),
    specificPhone: yup.string(),
    shortDescription: yup.string().max(150, 'A quantidade de caracteres não pode ultrapassar 150!'),
    longDescription: yup.string(),
    category: yup.string(),
});

const AdvertContent = ({
    idProp, nameProp, valueProp, specificPhoneProp, shortDescriptionProp,
    longDescriptionProp, categoryProp, imageProp,
    setIsOpen, isOnlyRead, isEditable
}: TAdvertContentProp) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<TUpdateAdvert>({ resolver: yupResolver(updateAdvertSchema) });

    const onSubmit = handleSubmit(async ({
        name, value, specificPhone, shortDescription, longDescription, category
    }: TUpdateAdvert) => {
        const unmaskedPhone = specificPhone ? unmaskPhone(specificPhone) : '';
        const formatedValue = Number(value?.replace(',', '.')) * 100;
        const body: TUpdateAdvert = {};

        if (!!name && name !== nameProp) {
            body.name = name;
        }

        if (!!formatedValue && formatedValue !== valueProp) {
            body.value = formatedValue.toString();
        }

        if (!!unmaskedPhone && unmaskedPhone !== specificPhoneProp) {
            body.specificPhone = unmaskedPhone;
        }

        if (!!shortDescription && shortDescription !== shortDescriptionProp) {
            body.shortDescription = shortDescription;
        }

        if (!!longDescription && longDescription !== longDescriptionProp) {
            body.longDescription = longDescription;
        }

        if (!!category && category !== categoryProp) {
            body.category = category;
        }

        try {
            await updateAdvert({
                id: idProp,
                name: body.name,
                value: Number(body.value),
                specificPhone: body.specificPhone,
                shortDescription: body.shortDescription,
                longDescription: body.longDescription,
                category: body.category
            });

            setIsOpen(false);
            window.location.reload();
        } catch (error) {
            throw error;
        }
    });

    // * Modal para visualização nos cards
    const ReadOnlyAdvertModalContent = () => {
        return (
            <S.WrapperReadOnly>
                <S.ImageSliderWrapper>
                    <ImageSlider images={imageProp} />
                </S.ImageSliderWrapper>
                <S.ContentWrapper>
                    <S.TitleReadOnly>{nameProp}</S.TitleReadOnly>
                    <S.Value>
                        {`R$ ${new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                        }).format(valueProp / 100)}`}
                    </S.Value>
                    <S.DetailsWrapper>
                        <p>{longDescriptionProp}</p>
                    </S.DetailsWrapper>
                    <S.ButtonWrapperReadOnly>
                        <Button onClick={() => setIsOpen(false)}>Fechar</Button>
                        <S.WhatsappButton
                            href={`https://wa.me/${specificPhoneProp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Entrar em Contato
                        </S.WhatsappButton>
                    </S.ButtonWrapperReadOnly>
                </S.ContentWrapper>
            </S.WrapperReadOnly>
        );
    }

    // * Modal para editar os dados do anuncio,
    const EditableAdvertContent = () => {
        const [phone, setPhone] = useState('');

        const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const maskedPhone = maskPhone(e.target.value);
            setPhone(maskedPhone);
            setValue('specificPhone', maskedPhone);
        };

        const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = parseFloat(e.target.value.replace(/[^\d]/g, '')) || 0;
            const formattedValue = new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
            }).format(inputValue / 100);

            e.target.value = formattedValue;
        };

        useEffect(() => {
            setValue('name', nameProp);
            setValue('value', (valueProp / 100).toString());
            setValue('specificPhone', maskPhone(specificPhoneProp));
            setValue('shortDescription', shortDescriptionProp);
            setValue('longDescription', longDescriptionProp);
            setValue('category', categoryProp)
        }, [])

        return (
            <S.WrapperEditable>
                <S.CloseModalButtonWrapper>
                    <S.CloseIcon onClick={() => setIsOpen(false)}>
                        <CloseModal />
                    </S.CloseIcon>
                </S.CloseModalButtonWrapper>
                <Title>Atualizar Anuncio</Title>
                <S.Form onSubmit={onSubmit}>
                    <S.WrapperForm>
                        <Input
                            placeholder={'Informe o nome do produto'}
                            type='text'
                            label='Nome'
                            {...register('name', { required: false })}
                            error={errors.name?.message}
                        />
                        <Input
                            placeholder={"00,00"}
                            type='text'
                            label="Valor"
                            prefix='R$'
                            {...register('value', {
                                required: false,
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
                            {...register('shortDescription', { required: false })}
                            error={errors.shortDescription?.message}
                        />
                        <TextArea
                            placeholder={'Informe uma descrição mais detalhada'}
                            label="Descrição Longa"
                            {...register('longDescription', { required: false })}
                            error={errors.longDescription?.message}
                        />
                        <S.NoInputWrapper>
                            <CategorySelect
                                label='Categorias'
                                {...register('category', { required: false })}
                            />
                        </S.NoInputWrapper>
                        <Button size='md' variant="green">Atualizar</Button>
                    </S.WrapperForm>
                </S.Form>
            </S.WrapperEditable>
        );
    }

    return (
        (isOnlyRead ? <ReadOnlyAdvertModalContent /> : (isEditable ? <EditableAdvertContent /> : ''))
    );
}

export default AdvertContent;
