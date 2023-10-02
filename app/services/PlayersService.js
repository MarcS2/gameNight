import { AppState } from "../AppState.js";
import { PlayersController } from "../controllers/PlayersController.js";

class PlayersService {
  scorePoint(playerName) {
    const foundPlayer = AppState.players.find(player => player.name == playerName)
    // @ts-ignore
    foundPlayer.score++
    console.log('in service', playerName);
  }
}