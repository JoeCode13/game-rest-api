import { Request, Response } from "express";
import pool from "../database";

class GameController {

  public async list(req: Request, res: Response) {

    pool.query('SELECT * FROM games', function(err, results, fields){

      if(err){
        res.json(err);
      }
      res.json(results);
      
    });
  }

  public listId(req: Request, res: Response){

    pool.query('SELECT * FROM games WHERE id = ?', [req.params.id], (err, results, fields) => {

        res.json(results);

    });
    
  }

  public create (req: Request, res: Response): void{ //* Create a game
    pool.query('INSERT INTO games SET ?', [req.body]);
    
    res.json({ message: "Game Saved" });
  }

  public update(req: Request, res: Response): void{ //! Update Method

    pool.query('UPDATE games set ? WHERE id = ?', [req.body, req.params.id])
    res.json({msg: 'game updated!'});


  }

  public delete(req: Request, res: Response) { //! Delete Method

    pool.query('DELETE FROM games WHERE id = ?', [req.params.id]);

    res.json({msg: 'Game deleted'});

  }
}

const gamesController = new GameController();

export default gamesController;
