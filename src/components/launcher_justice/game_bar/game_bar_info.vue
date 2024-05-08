<script setup lang="ts">
import { RadiantClass } from '../ts/radiant_class';
const props = defineProps<{
    radiant: RadiantClass
}>()
</script>

<template>
    <div class="bar-radiant-info-card">
        <header :class="props.radiant.name">
            <span>{{ props.radiant.name }}</span>
        </header>
        <main>
            <div class="hpMp">
                <span class="health red">HP: {{ props.radiant.health }}</span>
                <span class="mana blue">MP: {{ props.radiant.mana }}</span>
            </div>
            <div class="inventory">
                <span class="green">{{ props.radiant.healItem }}</span>
                <span class="blue">{{ props.radiant.manaItem }}</span>
                <span class="grey">{{ props.radiant.flyWeapon }}</span>
                <span class="pur">{{ props.radiant.buffItem }}</span>
            </div>
            <div class="skills">
                <div class="skill ">
                    <span class="skill_name range">{{ props.radiant.RangeAttackName }}</span>
                    <span class="skill_info range">Дальняя Атака</span>
                </div>
                <div class="skill ">
                    <span class="skill_name abillity">{{ props.radiant.abillity }}</span>
                    <span class="skill_info abillity">{{ props.radiant.abillityInfo }}</span>
                </div>
                <div class="skill ">
                    <span class="skill_name sick">{{ props.radiant.sickAbillity }}</span>
                    <span class="skill_info sick">{{ props.radiant.sickInfo }}</span>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
.bar-radiant-info-card {
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
        width: 100%;
        height: 10%;
        display: grid;
        place-items: center;
        border-radius: 20px;
        font-size: 40px;
        color: var(--white);
    }

    main {
        width: 100%;
        height: 80%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .hpMp{
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            span{
                padding: 20px 40px;
                color: var(--white);
                font-size: 30px;
                border-radius: 10px;
            }
        }
        .inventory{
            width: 100%;
            height: 20%;
            padding: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            span{
                padding: 10px 20px;
                font-size: 25px;
                border-radius: 10px;
                color: var(--white);
            }
        }
        .skills{
            width: 100%;
            height: 65%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 10px;
            .skill{
                position: relative;
                color: var(--white);
                width: 95%;
                height: 25%;
                .skill_name{
                    position: absolute;
                    left: 30px;
                    top: -17px;
                    padding: 5px 10px;
                    border-radius: 10px;
                    font-size: 20px;
                }
                .skill_info{
                    padding: 30px 30px;
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    border-radius: 10px;
                }
            }
        }
    }
}
</style>