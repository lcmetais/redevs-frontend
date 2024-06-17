import { useState } from 'react';
import * as S from './styles';
import LeftDoubleArrowIcon from '../Icons/LeftDoubleArrowIcon';
import RightDoubleArrowIcon from '../Icons/RightDoubleArrowIcon';
import LeftSimpleArrowIcon from '../Icons/LeftSimpleArrowIcon';
import RightSimpleArrowIcon from '../Icons/RightSimpleArrowIcon';

type PaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const displayPages = 7;

        const leftBound = Math.min(Math.max(1, currentPage - Math.floor(displayPages / 2)), totalPages - displayPages + 1);
        const rightBound = Math.min(leftBound + displayPages - 1, totalPages);

        const pageNumbers = Array.from({ length: rightBound - leftBound + 1 }, (_, index) => leftBound + index);

        if (totalPages > displayPages) {
            if (leftBound > 1) {
                pages.push(<S.Ellipsis key="ellipsis-start">...</S.Ellipsis>);
                pages.push(
                    <S.PageNumber key={1} onClick={() => handlePageClick(1)}>
                        1
                    </S.PageNumber>
                );
            }

            pageNumbers.forEach((pageNumber) => {
                pages.push(
                    <S.PageNumber key={pageNumber} active={pageNumber === currentPage} onClick={() => handlePageClick(pageNumber)}>
                        {pageNumber}
                    </S.PageNumber>
                );
            });

            if (rightBound < totalPages) {
                pages.push(<S.Ellipsis key="ellipsis-end">...</S.Ellipsis>);
                pages.push(
                    <S.PageNumber key={totalPages} onClick={() => handlePageClick(totalPages)}>
                        {totalPages}
                    </S.PageNumber>
                );
            }
        } else {
            // pageNumbers.forEach((pageNumber) => {
            //     pages.push(
            //         <S.PageNumber key={pageNumber} active={pageNumber === currentPage} onClick={() => handlePageClick(pageNumber)}>
            //             {pageNumber}
            //         </S.PageNumber>
            //     );
            // });
            for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
                pages.push(
                    <S.PageNumber key={pageNumber} active={pageNumber === currentPage} onClick={() => handlePageClick(pageNumber)}>
                        {pageNumber}
                    </S.PageNumber>
                );
            }
        }

        return pages;
    };

    return (
        <S.PaginationContainer>
            {
                totalPages > 1 
                ? currentPage === 1 
                    ? '' 
                    : <>
                        <S.Arrow onClick={() => handlePageClick(1)}><LeftDoubleArrowIcon /></S.Arrow>
                        <S.Arrow onClick={() => handlePageClick(Math.max(1, currentPage - 1))}><LeftSimpleArrowIcon /></S.Arrow>
                    </> 
                : ''
            }
            {renderPageNumbers()}
            {
                totalPages > 1
                ? currentPage === totalPages 
                    ? '' 
                    : <>
                        <S.Arrow onClick={() => handlePageClick(Math.max(1, currentPage + 1))}><RightSimpleArrowIcon /></S.Arrow>
                        <S.Arrow onClick={() => handlePageClick(1)}><RightDoubleArrowIcon /></S.Arrow>
                    </> 
                : ''
            }
        </S.PaginationContainer>
    );
};

export default Pagination;