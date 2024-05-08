import type { Icharacter, Ihealth, Iweapons, IisMagic, IRangeAttack, IAbillity, IInventory } from './interfaces'
import { randomNumber } from './module'

export class RadiantClass implements Icharacter, Ihealth, Iweapons, IRangeAttack, IAbillity, IisMagic, IInventory {
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
    RangeAttackName: string
    RACount: number
    abillity: string
    abillityInfo: string
    sickAbillity: string
    sickInfo: string
    fullMana: number
    mana: number

    healItem: string
    healCount: number
    manaItem: string
    manaCount: number
    flyWeapon: string
    flyCount: number
    buffItem: string
    buffItemCount: number
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
        RangeAttackName: string
        RACount: number
        abillity: string
        abillityInfo: string
        sickAbillity: string
        sickInfo: string
        fullMana: number
        mana: number

        healItem: string
        healCount: number
        manaItem: string
        manaCount: number
        flyWeapon: string
        flyCount: number
        buffItem: string
        buffItemCount: number
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
        this.RangeAttackName = obj.RangeAttackName
        this.RACount = obj.RACount
        this.abillity = obj.abillity
        this.abillityInfo = obj.abillityInfo
        this.sickAbillity = obj.sickAbillity
        this.sickInfo = obj.sickInfo
        this.fullMana = obj.fullMana
        this.mana = obj.mana

        this.healItem = obj.healItem
        this.healCount = obj.healCount
        this.manaItem = obj.manaItem
        this.manaCount = obj.manaCount
        this.flyWeapon = obj.flyWeapon
        this.flyCount = obj.flyCount
        this.buffItem = obj.buffItem
        this.buffItemCount = obj.buffItemCount
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
    get percentMana() {
        return this.mana * 100 / this.fullMana
    }
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
        this.minDamage += 15
        this.maxDamage += 15
    }
    deBuff(): void {
        this.buff -= 1
        this.minDamage -= 15
        this.maxDamage -= 15
    }
    RangeAttackUse(): void {
        if (this.RACount >= 1) {
            this.RACount -= 1
        }
    }
    AbillityUltUse(): void {
        if(this.mana >= 50){
            this.mana -= 50
        }
    }
    sickUse(): void {
        if (this.mana >= 30) {
            this.mana -= 30
        }
    }
    UseHeal(healStep: number, mana: number): number {
        if (this.health < this.fullHealth && this.mana >= mana) {
            this.health += healStep
            this.mana -= mana
            if (this.health > this.fullHealth) {
                this.health = this.fullHealth
            }
        }
        return this.health
    }

    useHealItem(): number {
        if (this.healCount >= 1) {
            this.healCount -= 1
            this.health += randomNumber(55, 60)
            if (this.health > this.fullHealth) {
                this.health = this.fullHealth
            }
        }
        return this.health
    }
    useManaItem(): number {
        if (this.manaCount >= 1) {
            this.manaCount -= 1
            this.mana += randomNumber(20, 35)
            if (this.mana > this.fullMana) {
                this.mana = this.fullMana
            }
        }
        return this.mana
    }
    useFlyWeapon(): void {
        if (this.flyCount >= 1) {
            this.flyCount -= 1
        }
    }
    useBuffItem(): void {
        if (this.buffItemCount >= 1) {
            this.buffItemCount -= 1
        }
    }
}