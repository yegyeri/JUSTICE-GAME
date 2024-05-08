import type { Icharacter, Ihealth, Iweapons, Imob } from './interfaces'
import { randomNumber } from './module'

export class EnemyClass implements Icharacter, Ihealth, Iweapons, Imob {
    id: number
    name: string
    kind: string
    state: string
    fullHealth: number
    health: number
    weapon: string
    minDamage: number
    maxDamage: number
    buff: number
    status: string
    danger: string
    alert: string
    constructor(obj: {
        id: number
        name: string
        kind: string
        state: string
        fullHealth: number
        health: number
        weapon: string
        minDamage: number
        maxDamage: number
        buff: number
        status: string
        danger: string
        alert: string
    }) {
        this.id = obj.id
        this.name = obj.name
        this.kind = obj.kind
        this.state = obj.state
        this.fullHealth = obj.fullHealth
        this.health = obj.health
        this.weapon = obj.weapon
        this.minDamage = obj.minDamage
        this.maxDamage = obj.maxDamage
        this.buff = obj.buff
        this.status = obj.status
        this.danger = obj.danger
        this.alert = obj.alert
    }
    takeDamage(get_damage: number) {
        if (this.health >= 0) {
            this.health -= get_damage
            if (this.health <= 0) {
                this.health = 0
                this.state = 'Погиб'
            } return this.health
        }
    }
    get percentHP() { return this.health * 100 / this.fullHealth }
    damage(min: number, max: number): number {
        return randomNumber(this.minDamage, this.maxDamage)
    }
    checkBuff(): void {
        if (this.buff === 1) {
            this.deBuff()
        } else if (this.buff === - 1) {
            this.upBuff()
        }
    }
    upBuff(): void {
        this.buff += 1
        this.minDamage += 10
        this.maxDamage += 10
    }
    deBuff(): void {
        this.buff -= 1
        this.minDamage -= 10
        this.maxDamage -= 10
    }
}