import React from 'react';
import * as S from './styles';

const SkeletonCard = () => {
    return (
        <S.SkeletonWrapper>
            <S.SkeletonImage />
            <S.SkeletonText />
            <S.SkeletonText />
            <S.SkeletonText />
            <S.SkeletonText />
            <S.SkeletonText />
            <S.SkeletonText />
        </S.SkeletonWrapper>
    );
};

export default SkeletonCard;