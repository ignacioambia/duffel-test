import {} from 'dotenv/config'
import { Duffel } from '@duffel/api';

export const duffelInstance = new Duffel({
    token: process.env.ACCESS_TOKEN
});
