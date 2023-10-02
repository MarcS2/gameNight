import { PlayersController } from "../controllers/PlayersController.js";
export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  get PlayerTemplateCard() {
    return `
    <div class="col-12 col-md-4">
        ${this.name} - ${this.score}
        <button class="btn btn-success" onclick="app.PlayersController.scorePoint('${this.name}')">+</button>
      </div>`
  }
}