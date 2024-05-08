<script setup lang="ts">
import radiant_menu from './radiant_menu.vue';
import radiant_card from './radiant_card.vue';
import enemy_card from './enemy_card.vue'
import battleInfo from './battle_info.vue'

import { ref, shallowRef, computed } from 'vue'
import { randomNumber } from '../ts/module';

import { geralt, leo, hulk, scorpion, flash } from '../ts/radiant_list';
import { RadiantClass } from '../ts/radiant_class';

import { utopec, footNinja, stormTrooper, kreep, reverseFlash, subZero, tanos, shreder, imlerih } from '../ts/enemy_list'
import { EnemyClass } from '../ts/enemy_class'

import { BattleInfo, Battle } from '../ts/battleClass'

const radiants = [geralt, leo, scorpion, hulk, flash]
const radiantId = ref(1)
const radiant = shallowRef<RadiantClass>()

const enemys = [utopec, footNinja, stormTrooper, kreep, reverseFlash, subZero, tanos, shreder, imlerih]
const enemy = shallowRef<EnemyClass>()

const BattleObj = shallowRef<BattleInfo>(Battle)

function changeHero(idNumber: number) {
    const newRadiant = new RadiantClass(radiants[idNumber])
    radiant.value = newRadiant
    return radiant
}
function changeEnemy() {
    let randEnemy = randomNumber(1, 9)
    const myEnemy = enemys[randEnemy - 1]
    enemy.value = myEnemy
    return enemy
}
function newFight() {
    const newBattle = new BattleInfo(Battle)
    BattleObj.value = newBattle
    return BattleObj
}
function goArena(idNumber: number) {
    changeHero(idNumber)
    changeEnemy()
    newFight()
}
</script>

<template>
    <div class="arena">
        <div class="radiant_menu">
            <div class="current_radiant">
                <span>Ваш выбор:</span>
                <span class="change_radiant" :id="radiants[radiantId].name">{{ radiants[radiantId].name }}</span>
                <button class="goArena" @click="goArena(radiantId)">Арена!</button>
            </div>
            <radiant_menu v-model:radiantId="radiantId" />
        </div>

        <div class="arena_fight">
            <div class="battle_fight">
                <radiant_card v-if="radiant" v-model:radiant="radiant" v-model:enemy="enemy"
                    v-model:BattleObj="BattleObj" />
                <battleInfo v-if="radiant" v-model:radiant="radiant" v-model:enemy="enemy"
                    v-model:BattleObj="BattleObj" />
                <enemy_card v-if="enemy" v-model:radiant="radiant" v-model:enemy="enemy"
                    v-model:BattleObj="BattleObj" />
            </div>
            <div class="battle_info">

            </div>
        </div>
    </div>
</template>

<style scoped>
.arena {
    width: 100%;
    height: 100vh;
    background-color: var(--dark);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .radiant_menu {
        height: 95%;
        width: 10%;
        background-color: var(--dark);
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border-radius: 15px;
        gap: 20px;

        .current_radiant {
            width: 100%;
            height: 20%;
            background-color: var(--light);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            gap: 5px;
            border-radius: 15px;

            .change_radiant {
                width: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--dark);
                padding: 10px 0px;
                border-radius: 10px;
                color: var(--light);
            }

            .goArena {
                width: 90%;
                padding: 10px 0px;
                background-color: var(--dark);
                border: none;
                border-radius: 10px;
                font-size: 25px;
                color: var(--light);
                cursor: pointer;
                user-select: none;
            }

            .goArena:hover {
                background-color: var(--red);
                transition: .5s ease;
            }
        }
    }

    .arena_fight {
        width: 85%;
        height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .battle_fight {
            width: 100%;
            height: 70%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .battle_info {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

#Геральт {
    background-color: var(--white);
    color: var(--dark);
}

#Леонардо {
    background-color: var(--blue);
}

#Халк {
    background-color: var(--green);
}

#Флеш {
    background-color: var(--red);
}

#Скорпион {
    background-color: var(--orange);
}
</style>