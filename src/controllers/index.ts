import { Request, Response } from 'express';
import { service } from '../services';

export const main = async (req: Request, res: Response) => {
    const {
        address,
        adults,
        children,
        check_in: checkIn,
        check_out: checkOut,
        country,
        currency,
        hotel_name: hotelName,
        language,
        location,
        no_rooms: noRooms,
        price,
        priceWithTaxes,
        price_type,
        taxes,
        url,
        zip,
    } = req.body;

    const response = await service({
        address,
        adults,
        children,
        checkIn,
        checkOut,
        country,
        currency,
        hotelName,
        language,
        location,
        noRooms,
        price,
        priceWithTaxes,
        price_type,
        taxes,
        url,
        zip,
    });

    res.send(response);
};
