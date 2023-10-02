import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


export class PlayersController {
  constructor() {
    console.log(AppState.players);
    _drawPlayers()
  }
  scorePoint(playerName) {
    console.log(playerName);
  }
}


function _drawPlayers() {
  let content = ''
  AppState.players.forEach(player => content += player.PlayerTemplateCard)

  setHTML('currentPlayers', content)
}