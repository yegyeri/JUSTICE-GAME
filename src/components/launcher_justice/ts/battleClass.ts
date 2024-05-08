import type { IBattle } from "./interfaces";

export class BattleInfo implements IBattle {
    round: number
    steps: number
    stepInfo: string
    roundInfo: any[]
    constructor(obj: {
        round: number
        steps: number
        stepInfo: string
    }) {
        this.round = obj.round
        this.steps = obj.steps
        this.stepInfo = obj.stepInfo
        this.roundInfo = []
    }
    upRound(): number {
        this.round += 1
        return this.round
    }
    upStep(): void {
        this.steps += 1
        this.stepInfo = 'Ход Противника'
    }
    downStep(): void {
        this.steps -= 1
        this.stepInfo = 'Ваш ход'
    }
}
const Battle = new BattleInfo({
    round: 1,
    steps: 1,
    stepInfo: 'Ваш ход'
})
export { Battle }