<script setup lang="ts">
import legend_info from './legend_info.vue'

import { RadiantClass } from '../ts/radiant_class';
import { EnemyClass } from '../ts/enemy_class'
import type { BattleInfo } from '../ts/battleClass'

import { ref, shallowRef, computed } from 'vue'
import { randomNumber } from '../ts/module';

const hpLine = computed<number>(() => props.enemy.percentHP);

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

</script>

<template>
    <div class="enemy_area">
        <div class="enemy_card">
            <header :class="props.enemy.name">
                <div class="stats">
                    <div class="stat">{{ props.enemy.kind }}</div>
                    <div class="stat">{{ props.enemy.weapon }}</div>
                    <div class="stat">Урон: {{ props.enemy.minDamage }} - {{ props.enemy.maxDamage }}</div>
                </div>
                <div class="name_state">
                    <span class="name">{{ props.enemy.name }}</span>
                    <span class="alert">{{ props.enemy.alert }}</span>
                    <span class="state">{{ props.enemy.state }}</span>
                </div>
            </header>
            <main>
                <div class="status_info">
                    <div class="status">{{ props.enemy.status }}</div>
                    <div class="danger" :class="props.enemy.danger">Опасность: {{ props.enemy.danger }}</div>
                </div>
                <div class="hp_block">
                    <span class="hp_text">HP: {{ Math.floor(props.enemy.health) }}</span>
                    <div class="hp_container">
                        <div class="hp_line" :style="{ 'width': hpLine + '%' }"></div>
                    </div>
                </div>
            </main>
        </div>
        <legend_info />
    </div>
</template>

<style scoped lang="scss">
.enemy_area {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .enemy_card {
        width: 100%;
        height: 45%;
        background-color: var(--light);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        header {
            width: 100%;
            height: 45%;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            padding: 15px 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .stats {
                width: 100%;
                height: 40%;
                display: flex;
                justify-content: start;
                align-items: center;
                gap: 10px;

                .stat {
                    background-color: var(--white);
                    padding: 5px 10px;
                    border-radius: 10px;
                }
            }

            .name_state {
                width: 100%;
                height: 60%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .name {
                    color: var(--white);
                    font-size: 45px;
                    font-weight: 700;
                }
                .alert{
                    color: var(--white);
                    font-size: 25px;
                }
                .state {
                    background-color: #fff;
                    font-size: 20px;
                    padding: 5px 15px;
                    border-radius: 10px;
                    cursor: pointer;
                }
            }
        }

        main {
            width: 100%;
            height: 55%;
            padding: 15px 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            .status_info {
                display: flex;
                justify-content: start;
                align-items: center;
                width: 100%;
                height: 30%;
                gap: 20px;
                font-size: 20px;

                .status {
                    background-color: var(--dark);
                    color: var(--white);
                    padding: 5px 10px;
                    border-radius: 10px;
                }

                .danger {
                    padding: 5px 10px;
                    color: var(--white);
                    border-radius: 10px;
                }
            }

            .hp_block {
                width: 100%;
                height: 70%;
                display: flex;
                justify-content: start;
                align-items: center;
                font-size: 25px;
                color: var(--white);
                gap: 20px;
                cursor: pointer;

                .hp_text {
                    height: 80%;
                    width: 30%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--red);
                    border-radius: 10px;
                }

                .hp_container {
                    width: 65%;
                    height: 80%;
                    background-color: var(--grey);
                    border-radius: 10px;

                    .hp_line {
                        width: 100%;
                        height: 100%;
                        background-color: var(--red);
                        border-radius: 10px;
                        transition: .5s ease;
                    }
                }
            }
        }
    }
}
</style>