import { Router } from 'express';
import { findHotel } from '../controllers';

const defaultRoute = Router();

defaultRoute.post('/findHotel', findHotel);

export { defaultRoute };
