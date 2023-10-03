import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";
import { setHTML } from "../utils/Writer.js";


export class PlayersController {
  constructor() {
    console.log(AppState.players);
    _drawPlayers()
  }
  scorePoint(playerName) {
    console.log(playerName);
    playersService.scorePoint(playerName)
  }
}


function _drawPlayers() {
  let content = ''
  AppState.players.forEach(player => content += player.PlayerTemplateCard)

  setHTML('currentPlayers', content)
}