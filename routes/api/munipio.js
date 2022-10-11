import { Munic } from '../../db.js';

export const apiMunicipioRouter = (router) =>{
    router.get('/municipios', async (req, res) => {
    const municipios = await Munic.findAll();
    res.json(municipios);
})

router.get('/municipios/:id', async (req, res) => {
    const municipio = await Munic.findOne({
       where: {
        id: req.params.id
       }
    });
    res.json(municipio);
})

router.post('/municipios', async (req, res) => {
    const municipio = await Munic.create(req.body);
    res.json(municipio);
})

router.put('/municipios/:id', async (req, res) => {
    await Munic.update(req.body, {
       where: {
        id: req.params.id
       }
    });
    res.json({success: 'Se modifico con exito!'});
})

router.delete('/municipios/:id', async (req, res) => {
    await Munic.destroy({
       where: {
        id: req.params.id
       }
    });
    res.json({success: 'Se ha borrado el dato!'});
})
}
