import { randomUUID } from 'crypto';
import { config } from '../../config';

export const getHotelListURL = async (body, cityId, hotelId) => {
    let newUrl =
        `${config.agoda.domain}/search?textToSearch=${encodeURIComponent(
            body.hotelName
        )}` +
        `&guid=${randomUUID()}` +
        '&isRealUser=true' +
        '&mode=production' +
        `&checkIn=${body.checkIn}` +
        `&checkOut=${body.checkOut}` +
        `&rooms=${body.noRooms}` +
        `&adults=${body.adults}` +
        `&priceCur=${body.currency}` +
        `&city=${cityId}` +
        `&currency=${body.currency}` +
        `&hotel=${hotelId}&selectedproperty=${hotelId}`;

    if (body.children?.length) {
        newUrl =
            newUrl +
            `&children=${body.children?.length}` +
            `&childAges=${body.children}`;
    }

    return newUrl;
};
