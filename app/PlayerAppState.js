import { Player } from "./models/Player.js";
import { EventEmitter } from "./utils/EventEmitter.js";


export class PlayerAppState extends EventEmitter {
  players = [new Player('marc')];
} 