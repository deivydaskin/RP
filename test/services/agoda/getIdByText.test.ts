import 'jest';
import axios from 'axios';
import { getIdByText } from '../../../src/services/agoda/getIdByText';

jest.mock('axios', () => {
    return {
        get: jest.fn(() =>
            Promise.resolve({
                data: {
                    SuggestionList: [
                        {
                            ObjectID: '555',
                        },
                    ],
                },
            })
        ),
    };
});

describe('Suggested ID by agoda for given text test suite', () => {
    it('returns found id by text', async () => {
        const testSearchText = 'Test#1';
        const result = await getIdByText(testSearchText);

        expect(result).toBe('555');
    });
});
