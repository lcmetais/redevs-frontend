import { useState } from 'react';
import { TImageObject } from '../../types/image-object-type';
import * as S from './styles';

type TImageSlider = {
    images: TImageObject[] | [];
};

const ImageSlider = ({ images }: TImageSlider) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const plusSlides = (addValue: number) => {
        showSlides(slideIndex + addValue);
    };

    const currentSlide = (indexValue: number) => {
        showSlides(indexValue);
    };

    const showSlides = (currIndex: number) => {
        if (currIndex >= images.length) {
            setSlideIndex(0);
        } else if (currIndex < 0) {
            setSlideIndex(images.length - 1);
        } else {
            setSlideIndex(currIndex);
        }
    };

    return (
        <S.Wrapper>
            <S.ImageContainer>
                {images.map((image, index) => (
                    <S.FadeContainer key={image.id} style={{ display: index === slideIndex ? 'block' : 'none' }}>
                        <S.NumberText>
                            {index + 1} / {images.length}
                        </S.NumberText>
                        <S.Image src={image.imageStorageUrl} />
                    </S.FadeContainer>
                ))}
            </S.ImageContainer>

            <S.PrevIcon onClick={() => plusSlides(-1)}>❮</S.PrevIcon>
            <S.NextIcon onClick={() => plusSlides(1)}>❯</S.NextIcon>

            <S.DotSpanWrapper>
                {images.map((_, index) => (
                    <S.DotSpan key={index} onClick={() => currentSlide(index)} className={index === slideIndex ? 'active' : ''} />
                ))}
            </S.DotSpanWrapper>
        </S.Wrapper>
    );
};

export default ImageSlider;
