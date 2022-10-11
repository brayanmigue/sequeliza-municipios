import bcryptjs from 'bcryptjs';
import { User } from '../../db.js';
import { check, validationResult } from 'express-validator';

export const apiUsersRouter = (router) =>{
    router.post('/users/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').not().isEmpty()
], async (req, res) => {

   const errors = validationResult(req);
   if (!errors.isEmpty()){
    return res.status(422).json({ errores: errors.array()})
   }

   req.body.password = bcryptjs.hashSync(req.body.password, 10);
   const user = await User.create(req.body);
   res.json(user);
});
}