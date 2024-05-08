<script setup lang="ts">
import type { RadiantClass } from '../ts/radiant_class';
import type { EnemyClass } from '../ts/enemy_class'
import type { BattleInfo } from '../ts/battleClass'


const emits = defineEmits<{
    (e: 'update:radiant', v: RadiantClass):void
    (e: 'update:enemy', v: EnemyClass):void
    (e: 'update:BattleObj', v: BattleInfo):void
}>()
const props = defineProps<{
    radiant: RadiantClass
    enemy: EnemyClass
    BattleObj: BattleInfo
}>()
</script>

<template>
    <div class="battle_console">
        <div class="round">
            <span class="counts">{{ props.BattleObj.round }}</span>
            <span>Раунд</span>
        </div>
        <div class="step">
            <span>{{ props.BattleObj.stepInfo }}</span>
        </div>
        <div class="console">
            <div class="battle_result" v-if="props.radiant.state === 'Жив' && props.enemy.state === 'Жив'">
                <span>Бой Идёт!</span>
            </div>
            <div class="battle_result" v-if="props.radiant.state === 'Жив' && props.enemy.state === 'Погиб'">
                <span >{{ props.radiant.name }}</span>
                <span>Победил</span>
                <span>Врага:</span>
                <span>{{ props.enemy.name }}</span>
                <router-link to="/game/bar" class="exit">В Бар!</router-link>
            </div>
            <div class="battle_result" v-if="props.radiant.state === 'Погиб' && props.enemy.state === 'Жив'">
                <span>{{ props.radiant.name }}</span>
                <span>Погиб</span>
                <span>от</span>
                <span>{{ props.enemy.name }}</span>
                <router-link to="/game/bar" class="exit">В Бар!</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.battle_console{
    background-color: var(--light);
    width: 20%;
    height: 95%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 40px;
    .round{
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        gap: 10px;
        background-color: var(--red);
        border-radius: 30px;
        color: var(--white);
        .counts{
            font-size: 50px;
        }
    }
    .step{
        height: 20%;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 35px;
        gap: 10px;
        background-color: var(--red);
        border-radius: 30px;
        color: var(--white);
    }
    .console{
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        gap: 10px;
        background-color: var(--red);
        border-radius: 30px;
        color: var(--white);
        .battle_result{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-size: 30px;
            text-align: center;
            .exit{
                text-decoration: none;
                padding: 10px 20px;
                background-color: var(--light);
                color: var(--red);
                border-radius: 10px;
            }
            .exit:hover{
                background-color: var(--red);
                color: var(--light);
                transition: .5s ease;
            }
        }
    }
}
</style>