"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = __importDefault(require("../controllers/gameController"));
class GamesRoutes {
    constructor() {
        // Propiedad
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', gameController_1.default.list);
        this.router.get('/:id', gameController_1.default.listId);
        this.router.post('/', gameController_1.default.create);
        this.router.put('/:id', gameController_1.default.update);
        this.router.delete('/:id', gameController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
