import express, { Application } from "express";
import indexRoutes from "./routes/index.routes";
import GamesRoutes from "./routes/games.routes";
import morgan from 'morgan';
import cors from 'cors';

class Server {
  public app: Application;

  constructor(){
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void { // Para la configuración de nuestro servidor.
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan('dev'))
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
  }

  routes(): void {

    this.app.use(indexRoutes);
    this.app.use('/api/games',GamesRoutes);
  } // Rutas para la navegación

  start():void { // iniciará nuestro servidor.
    this.app.listen(this.app.get("port"), () => {
      console.log(
        `Server running on port: http://localhost:${this.app.get("port")}`
      );
    });
  }
}

const server = new Server();
server.start();
