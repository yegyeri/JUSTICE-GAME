export interface Icharacter {
    id: number
    name: string
    kind: string
    alert: string
}

export interface Iweapons {
    weapon: string
    minDamage: number
    maxDamage: number
    buff: number
    damage(min: number, max: number): number
    checkBuff(): void
    upBuff(): void
    deBuff(): void
}

export interface IRangeAttack {
    RangeAttackName: string
    RACount: number
    RangeAttackUse(): void
}

export interface Ihealth {
    state: string
    fullHealth: number
    health: number
    percentHP: number
    takeDamage(get_damage: number): void;
}

export interface IAbillity {
    abillity: string
    abillityInfo: string
    sickAbillity: string
    sickInfo: string
    AbillityUltUse(): void
    sickUse(): void
}

export interface IInventory {
    healItem: string
    healCount: number
    manaItem: string
    manaCount: number
    flyWeapon: string
    flyCount: number
    buffItem: string
    buffItemCount: number
    useHealItem(): void
    useManaItem(): void
    useFlyWeapon(): void
    useBuffItem(): void
}

export interface IisMagic {
    fullMana: number
    mana: number
    percentMana: number
    UseHeal(healStep: number, mana: number): number
}

export interface Imob {
    status: string
    danger: string
}

export interface IBattle {
    round: number
    steps: number
    upRound(): void
    upStep(damage: number): void
    downStep(damage: number): void
}