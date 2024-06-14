import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type TSerachContextValue = {
    searchText: string
    setSearch: (text: string) => void
}

const SearchContext = createContext({} as TSerachContextValue);

type TSearchProviderProps = {
    children: ReactNode
}

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: TSearchProviderProps) => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const setSearch = (text: string) => {
        if (location.pathname !== '/') {
            navigate('/');
        }

        setSearchText(text);
    }

    return (
        <SearchContext.Provider value={{ searchText, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
