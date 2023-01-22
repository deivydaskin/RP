import { Router } from 'express';
import { main } from '../controllers';

const defaultRoute = Router();

defaultRoute.post('/findHotel', main);

export { defaultRoute };
