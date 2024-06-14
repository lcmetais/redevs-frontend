import { ReactNode } from 'react';
import * as S from './styles';

export type TModalProps = {
    isOpen: boolean
    children: ReactNode
    advertOnlyRead?: boolean
    advertEdit?: boolean
}

const Modal = ({
    isOpen, children, advertOnlyRead, advertEdit
}: TModalProps) => {
    return (
        (isOpen &&
            <S.Wrapper>
                <S.Modal
                    advertOnlyRead={advertOnlyRead}
                    advertEdit={advertEdit}
                >
                    {children}
                </S.Modal>
            </S.Wrapper>
        )
    );
}

export default Modal;
