import axios from 'axios';
import { config } from '../../config';

export const getIdByText = async (
    searchText: string
): Promise<string | undefined> => {
    try {
        const newUrl = new URL(config.agoda.domain);
        newUrl.pathname =
            'api/cronos/search/GetUnifiedSuggestResult/3/1/1/0/en-us/';
        newUrl.searchParams.append(
            'searchText',
            encodeURIComponent(searchText)
        );
        const result = await axios.get(newUrl.href);

        return result.data.SuggestionList[0].ObjectID;
    } catch (err) {
        console.log(err);
        return undefined;
    }
};
