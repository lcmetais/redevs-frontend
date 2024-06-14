import { css, styled } from 'styled-components';
import { TModalProps } from '.';
import media from 'styled-media-query';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;

    background-color: rgb(0, 0, 0, 0.2);
`;

type TModal = 'advertOnlyRead' | 'advertEdit';

type TModalProp = {} & Pick<TModalProps, TModal>

export const modalModifiers = {
    advertOnlyRead: () => css`
        height: 85%;
        width: 640px;

        ${media.lessThan('medium')`
            width: 440px;
        `}
    `,

    advertEdit: () => css`
        height: 80%;
        width: 70%;
    `,
}

export const Modal = styled.div<TModalProp>`
    ${({ advertOnlyRead, advertEdit }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;

        background-color: white;

        ${!!advertOnlyRead && modalModifiers.advertOnlyRead()}
        ${!!advertEdit && modalModifiers.advertEdit()}
    `}
`;
