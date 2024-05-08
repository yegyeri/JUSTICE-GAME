<script setup lang="ts">
import { shallowRef, ref, computed, unref } from 'vue'
import { RadiantClass } from '../ts/radiant_class';
import { EnemyClass } from '../ts/enemy_class';
import { BattleInfo } from '../ts/battleClass';
import { randomNumber } from '../ts/module'


const hpLine = computed<number>(() => props.radiant.percentHP);
const manaLine = computed<number>(() => props.radiant.percentMana)

const emits = defineEmits<{
    (e: 'update:radiant', v: RadiantClass): void
    (e: 'update:enemy', v: EnemyClass): void
    (e: 'update:BattleObj', v: BattleInfo): void
}>()
const props = defineProps<{
    radiant: RadiantClass
    enemy: EnemyClass
    BattleObj: BattleInfo
}>()

function stepEnemy(damage: number) {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    const randNumber = randomNumber(1, 10)
    if (newEnemy.state === 'Жив') {
        if(randNumber <= 2){
            newEnemy.alert = 'Промах' 
        }else if(randNumber > 2 && randNumber <=8){
            newRadiant.takeDamage(damage)
            newEnemy.alert = 'Удар'
            console.log(randNumber);
        }else if(randNumber > 8){
            newRadiant.takeDamage(damage * 2)
            newEnemy.alert = 'Крит'
            console.log(randNumber);
        }
        newEnemy.checkBuff()
        newBattle.downStep()
        newBattle.upRound()
    } else if(newEnemy.state === 'Погиб'){
        newBattle.stepInfo = 'Бой Окончен'
    }


    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}

function emptyAttack() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    const randNumber = randomNumber(1, 10)
    if (newBattle.steps === 1) {
        if(randNumber === 1){
            newRadiant.alert = 'Промах'
            console.log(randNumber);
            
        }else if(randNumber > 1 && randNumber <=8){
            newEnemy.takeDamage(newRadiant.damage(newRadiant.minDamage, newRadiant.maxDamage))
            newRadiant.alert = 'Удар'
            console.log(randNumber);
        }else if(randNumber > 8){
            newEnemy.takeDamage((newRadiant.damage(newRadiant.minDamage, newRadiant.maxDamage)) * 2)
            newRadiant.alert = 'Крит'
            console.log(randNumber);
        }
        newRadiant.checkBuff()
        newBattle.upStep()
        setTimeout(() => {
            stepEnemy(newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage))
        }, 2000)
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function useHeal() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        newRadiant.UseHeal(70, 20)
        newBattle.upStep()
        setTimeout(() => {
            stepEnemy(newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage))
        }, 3000)
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function useShield() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        newRadiant.checkBuff()
        newRadiant.upBuff()
        newBattle.upStep()
        setTimeout(() => {
            stepEnemy((newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage)) / 2)
        }, 2000)
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function rangeAttack() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        if (newRadiant.RACount >= 1) {
            newRadiant.RangeAttackUse()
            newEnemy.takeDamage((newRadiant.damage(newRadiant.minDamage, newRadiant.maxDamage)) / 1.5)
            newEnemy.deBuff()
            newRadiant.checkBuff()
            newBattle.upStep()
            setTimeout(() => {
                stepEnemy(newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage))
            }, 2000)
        }
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function sickAbillityUse() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        newEnemy.takeDamage((newRadiant.damage(newRadiant.minDamage, newRadiant.maxDamage)) / 3)
        newRadiant.sickUse()
        newEnemy.deBuff()
        newRadiant.checkBuff()
        newBattle.upStep()
        setTimeout(() => {
            stepEnemy(newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage))
        }, 2000)
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function UseUlt() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        if (newRadiant.mana >= 50) {
            newEnemy.takeDamage((newRadiant.damage(newRadiant.minDamage, newRadiant.maxDamage)) * 1.5)
            newRadiant.AbillityUltUse()
            newRadiant.checkBuff()
            newBattle.upStep()
            setTimeout(() => {
                stepEnemy(newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage))
            }, 2000)
        }
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function UseHealItem() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        if (newRadiant.healCount >= 1) {
            newRadiant.useHealItem()
            newBattle.upStep()
            setTimeout(() => {
                stepEnemy(newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage))
            }, 2000)
        }
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function UseManaItem() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        if (newRadiant.manaCount >= 1) {
            newRadiant.useManaItem()
            newBattle.upStep()
            setTimeout(() => {
                stepEnemy(newEnemy.damage(newEnemy.minDamage, newEnemy.maxDamage))
            }, 2000)
        }
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function UseFlyWeapon() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        if (newRadiant.flyCount >= 1) {
            newRadiant.useFlyWeapon()
            newEnemy.takeDamage((newRadiant.damage(newRadiant.minDamage, newRadiant.maxDamage)) / 3)
            newBattle.upStep()
            setTimeout(() => {
                stepEnemy(0)
            }, 2000)
        }

    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
function UseBuffItem() {
    const newEnemy = new EnemyClass(props.enemy)
    const newRadiant = new RadiantClass(props.radiant)
    const newBattle = new BattleInfo(props.BattleObj)
    if (newBattle.steps === 1) {
        newRadiant.checkBuff()
        newRadiant.upBuff()
        newRadiant.useBuffItem()
        newBattle.upStep()
        setTimeout(() => {
            stepEnemy(0)
        }, 2000)
    }
    emits('update:radiant', newRadiant)
    emits('update:enemy', newEnemy)
    emits('update:BattleObj', newBattle)
}
</script>

<template>
    <div class="radiant_card">
        <header :class="props.radiant.name">
            <div class="stats">
                <span class="stat">{{ props.radiant.kind }}</span>
                <span class="stat">{{ props.radiant.weapon }}</span>
                <span class="stat">Урон: {{ props.radiant.minDamage }} - {{ props.radiant.maxDamage }}</span>
            </div>
            <div class="name_state">
                <span class="name">{{ props.radiant.name }}</span>
                <span class="alert">{{ props.radiant.alert }}</span>
                <span class="state">{{ props.radiant.state }}</span>
            </div>
        </header>
        <main>
            <div class="hpMana_block">
                <span class="hp_text">HP: {{ Math.floor(props.radiant.health) }}</span>
                <div class="hpMana_container">
                    <div class="hp_line" :style="{ 'width': hpLine + '%' }"></div>
                </div>
            </div>
            <div class="hpMana_block">
                <span class="mana_text">MP: {{ props.radiant.mana }}</span>
                <div class="hpMana_container">
                    <div class="mana_line" :style="{ 'width': manaLine + '%' }"></div>
                </div>
            </div>
        </main>
        <footer>
            <div class="inventory">
                <span class="inventory_name">Инвернтарь <i class='bx bxs-chevrons-down'></i></span>
                <div class="inventory_items">
                    <div class="inventory_item green" @click="UseHealItem()">
                        <span class="Iname">{{ props.radiant.healItem }}</span>
                        <span class="item_info">+ Лечение</span>
                        <span class="Icount">{{ props.radiant.healCount }}</span>
                    </div>
                    <div class="inventory_item blue" @click="UseManaItem()">
                        <span class="Iname">{{ props.radiant.manaItem }}</span>
                        <span class="item_info">+ Мана</span>
                        <span class="Icount">{{ props.radiant.manaCount }}</span>
                    </div>
                    <div class="inventory_item grey" @click="UseFlyWeapon()">
                        <span class="Iname">{{ props.radiant.flyWeapon }}</span>
                        <span class="item_info">Бросок</span>
                        <span class="Icount">{{ props.radiant.flyCount }}</span>
                    </div>
                    <div class="inventory_item pur" @click="UseBuffItem()">
                        <span class="Iname">{{ props.radiant.buffItem }}</span>
                        <span class="item_info">Усиление</span>
                        <span class="Icount">{{ props.radiant.buffItemCount }}</span>
                    </div>
                </div>
                <router-link to="/game/bar" class="exit">Сбежать!</router-link>
            </div>
            <div class="skills">
                <div class="skills_name">Умения <i class='bx bxs-chevrons-down'></i></div>
                <div class="skill_list">
                    <div class="skill green" @click="useHeal()">
                        <i class='bx bxs-heart'></i>
                        <span class="skill_name">Лечение</span>
                    </div>
                    <div class="skill attack" @click="emptyAttack()">
                        <i class='bx bxs-bone'></i>
                        <span class="skill_name">Атака</span>
                    </div>
                    <div class="skill grey" @click="useShield()">
                        <i class='bx bxs-shield-alt-2'></i>
                        <span class="skill_name">Защита</span>
                    </div>

                    <div class="skill range" @click="rangeAttack()">
                        <i class='bx bxs-rocket'></i>
                        <span class="RAcount">{{ props.radiant.RACount }}</span>
                        <span class="skill_name">{{ props.radiant.RangeAttackName }}</span>
                    </div>
                    <div class="skill sick" @click="sickAbillityUse()">
                        <i class='bx bxs-injection'></i>
                        <span class="skill_name">{{ props.radiant.sickAbillity }}</span>
                    </div>
                    <div class="skill abillity" @click="UseUlt()">
                        <i class='bx bxs-zap'></i>
                        <span class="skill_name">{{ props.radiant.abillity }}</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped lang="scss">
.radiant_card {
    width: 40%;
    height: 95%;
    background-color: var(--light);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
        width: 100%;
        height: 20%;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 10px;

        .stats {
            display: flex;
            width: 100%;
            height: 40%;
            gap: 10px;

            .stat {
                padding: 5px 10px;
                border-radius: 10px;
                cursor: pointer;
            }
        }

        .name_state {
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .name {
                font-size: 45px;
                font-weight: 700;
            }
            .alert{
                color: var(--white);
                font-size: 25px;
            }
            .state {
                font-size: 20px;
                padding: 5px 15px;
                border-radius: 10px;
                cursor: pointer;
            }
        }
    }

    main {
        width: 100%;
        height: 25%;
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .hpMana_block {
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: start;
            align-items: center;
            font-size: 25px;
            color: var(--white);
            gap: 20px;
            cursor: pointer;

            .hp_text {
                height: 100%;
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--red);
                border-radius: 10px;
            }

            .mana_text {
                height: 100%;
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--blue);
                border-radius: 10px;
            }

            .hpMana_container {
                width: 65%;
                height: 100%;
                background-color: var(--grey);
                border-radius: 10px;

                .hp_line {
                    width: 100%;
                    height: 100%;
                    background-color: var(--red);
                    border-radius: 10px;
                    transition: .5s ease;
                }

                .mana_line {
                    width: 100%;
                    height: 100%;
                    background-color: var(--blue);
                    border-radius: 10px;
                    transition: .5s ease;
                }
            }
        }
    }

    footer {
        width: 100%;
        height: 55%;
        padding: 10px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .inventory {
            height: 100%;
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            user-select: none;

            .inventory_name {
                width: 100%;
                height: 15%;
                background-color: var(--dark);
                color: var(--white);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                cursor: pointer;
            }

            .inventory_items {
                width: 100%;
                height: 55%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 10px;

                .inventory_item {
                    position: relative;
                    width: 47%;
                    height: 40%;
                    font-size: 20px;
                    color: var(--white);
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border-radius: 10px;
                    cursor: pointer;

                    .Icount {
                        position: absolute;
                        top: -5px;
                        right: -5px;
                        width: 30px;
                        height: 29px;
                        background-color: var(--red);
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 15px;
                    }

                    .item_info {
                        position: absolute;
                        bottom: -8px;
                        left: -5px;
                        background-color: var(--red);
                        color: var(--white);
                        padding: 3px 8px;
                        font-size: 12px;
                        border-radius: 10px;
                    }
                }

                .inventory_item:hover {
                    background-color: var(--red);
                    transition: .5s ease;
                }
            }

            .exit {
                width: 100%;
                height: 20%;
                background-color: var(--dark);
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 25px;
                color: var(--white);
                cursor: pointer;
                text-decoration: none;
            }

            .exit:hover {
                background-color: var(--red);
                transition: .5s ease;
            }
        }

        .skills {
            height: 100%;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;

            .skills_name {
                width: 100%;
                height: 15%;
                background-color: var(--dark);
                color: var(--white);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                cursor: pointer;
            }

            .skill_list {
                width: 100%;
                height: 73.5%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: start;
                gap: 15px 20px;

                .skill {
                    position: relative;
                    width: 45%;
                    height: 30%;
                    color: var(--white);
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                    font-size: 23px;
                    font-weight: 300;
                    border-radius: 10px;
                    user-select: none;

                    .RAcount {
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        width: 40px;
                        height: 40px;
                        background-color: var(--red);
                        display: none;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        font-size: 20px;
                    }

                    i {
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        width: 40px;
                        height: 40px;
                        background-color: var(--red);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        font-size: 20px;
                    }
                }

                .skill:hover {
                    background-color: var(--red);
                    transition: .5s ease;
                    cursor: pointer;

                    .RAcount {
                        display: flex;
                    }

                    i {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>