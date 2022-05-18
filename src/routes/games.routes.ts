import { Router } from 'express';
import  gamesController  from '../controllers/gameController'

class GamesRoutes{
    // Propiedad
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.listId);
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;