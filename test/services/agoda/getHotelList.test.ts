import 'jest';
import { getHotelListURL } from '../../../src/services/agoda/getHotelList';

describe('HotelList URL test suite', () => {
    it('constructs url string by given parameters', async () => {
        const testBody = {
            adults: 2,
            checkIn: '2023-02-01',
            checkOut: '2023-02-02',
            country: 'United Kingdom',
            currency: 'EUR',
            hotelName: 'Vilenza Hotel',
            language: 'lt',
            location: 'London',
            noRooms: 1,
        };
        const testCityId = '233';
        const testHotelId = '999';
        const testUUID = () => '555555555555';
        const result = await getHotelListURL(
            testBody,
            testCityId,
            testHotelId,
            { randomUUID: testUUID }
        );

        expect(result).toBe(
            'https://www.agoda.com/search?textToSearch=Vilenza%20Hotel&guid=555555555555&isRealUser=true&mode=production&checkIn=2023-02-01&checkOut=2023-02-02&rooms=1&adults=2&priceCur=EUR&city=233&currency=EUR&hotel=999&selectedproperty=999'
        );
    });
});
