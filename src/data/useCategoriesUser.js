import useSWR from 'swr';
import API from './index';

export const useCategoriesUser = ( id, options= {} ) => {
    const { data, error } = useSWR( `/users/${ id }/categories`, API.fetcher, options );

    return {
        categories: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};