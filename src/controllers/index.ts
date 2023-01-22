import { Request, Response } from 'express';
import { service } from '../services';

export type FindHotelBody = {
    address?: string;
    adults: string;
    children: number[];
    checkIn: string;
    checkOut: string;
    country: string;
    currency: string;
    hotelName: string;
    language: string;
    location: string;
    noRooms: number;
    price?: number;
    priceWithTaxes?: number;
    price_type?: string;
    taxes?: number;
    url?: string;
    zip?: string;
};

export const findHotel = async (req: Request, res: Response) => {
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
