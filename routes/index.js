import { apiMunicipioRouter } from './api/munipio.js';
import { apiUsersRouter } from './api/users.js';

export const apiRouter = (router) => {
  apiMunicipioRouter(router)
  apiUsersRouter(router)
}

