<script setup lang="ts">
import { ref, shallowRef } from 'vue'

import game_bar_info from './game_bar_info.vue'

import { geralt, leo, hulk, scorpion, flash } from '../ts/radiant_list';
import { RadiantClass } from '../ts/radiant_class';

const radiants = [geralt, leo, scorpion, hulk, flash]
const radiantId = ref(1)
const radiant = shallowRef<RadiantClass>()

function changeHero(idNumber: number) {
    const newRadiant = new RadiantClass(radiants[idNumber])
    radiant.value = newRadiant
    return radiant
}
</script>

<template>
    <div class="bar-view">
        <div class="bar-view-main">
            <div class="radiant-list">
                <div class="radiant-item" v-for="r in radiants" :key="r.id" @click="changeHero(r.id - 1)">
                    <div class="radiant-profile">
                        <span>{{ r.kind }}</span>
                        <span>Оружие: {{ r.weapon }}</span>
                        <span>Урон: {{ r.minDamage }} - {{ r.maxDamage }}</span>
                    </div>
                    <div class="radiant-color" :class="r.name">
                        <span>{{ r.name }}</span>
                    </div>
                </div>
            </div>
            <div class="arenaGo">
                <router-link to="/game/arena" class="btn">Арена</router-link>
                <router-link to="/game" class="btn">Меню</router-link>
            </div>
        </div>
        <div class="bar-radiant-info">
            <game_bar_info 
            v-if="radiant"
            v-model:radiant="radiant"
            />
        </div>
    </div>
</template>

<style scoped>
.bar-view {
    width: 100%;
    height: 100vh;
    background-color: var(--dark);
    display: flex;
    justify-content: center;
    align-items: center;

    .bar-view-main {
        width: 50%;
        height: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        .radiant-list {
            width: 100%;
            height: 70%;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            align-items: center;
            gap: 20px;

            .radiant-item {
                width: 30%;
                height: 40%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 20px;

                .radiant-profile {
                    width: 80%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: end;
                    text-align: end;
                    padding: 20px;
                    gap: 10px;

                    span {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: var(--grey);
                        padding: 10px 10px;
                        font-size: 20px;
                        background-color: var(--light);
                        border-radius: 10px;
                    }
                }

                .radiant-color {
                    width: 20%;
                    height: 100%;
                    border-radius: 20px;
                    display: flex;
                    writing-mode: vertical-rl;
                    justify-content: center;
                    align-items: center;
                    color: aliceblue;
                    font-size: 30px;
                }
            }

            .radiant-item:hover {
                cursor: pointer;

                .radiant-profile {
                    span {
                        background-color: var(--white);
                        color: var(--red);
                        transition: .5s ease;
                    }
                }
            }
        }

        .arenaGo {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            .btn{
                width: 40%;
                height: 40%;
                background-color: var(--light);
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--red);
                font-size: 40px;
                text-decoration: none;
            }
            .btn:hover{
                background-color: var(--red);
                color: var(--light);
                transition: .5s ease;
            }
        }
    }

    .bar-radiant-info {
        width: 50%;
        height: 100%;
        padding: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>