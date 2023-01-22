import { scraper } from './agoda/scraper';
import { getIdByText } from './agoda/getIdByText';
import { getHotelListURL } from './agoda/getHotelList';

export const service = async (body) => {
    try {
        const cityId = await getIdByText(body.location);
        const hotelId = await getIdByText(`${body.hotelName} ${body.location}`);
        const hotelListURL = await getHotelListURL(
            { ...body },
            cityId,
            hotelId
        );

        const scrapperResponse = await scraper(hotelListURL);

        return {
            selectedHotelPrice: scrapperResponse.price,
            currency: body.currency,
            hotel: scrapperResponse.hotelName,
            hotelListURL,
        };
    } catch (err) {
        console.log(err);
    }
};
