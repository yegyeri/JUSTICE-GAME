<script setup lang="ts">
import { geralt, leo, hulk, scorpion, flash } from '../ts/radiant_list';

const emits = defineEmits<{
    (e: 'update:radiantId', v: number): void
}>()

const props = defineProps<{
    radiantId: number
}>()

const radiantes = [geralt, leo, scorpion, hulk, flash]
function currentId(id: number) {
    let newRadiantId = props.radiantId
    newRadiantId = id
    emits('update:radiantId', newRadiantId)
}

</script>

<template>
        <ul class="radiants_list">
            <li v-for="t in radiantes" :key="t.id" class="pack_list_item" :id="t.name" @click="currentId(t.id - 1)">
                <span>{{ t.name }}</span>
                <span class="kind">{{ t.kind }}</span>
                <span>Урон:</span>
                <span>{{ t.minDamage }} - {{ t.maxDamage }}</span>
            </li>
        </ul>
</template>

<style scoped lang="scss">

.radiants_list {
        width: 200px;
        left: 23px;
        top: 220px;
        height: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: .5s;
        backdrop-filter: opacity(0%);
        gap: 10px;

        .pack_list_item {
            width: 180px;
            height: 135px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            background-color: var(--light);
            color: var(--dark);
            font-size: 20px;
            font-weight: 500;
            list-style: none;
            user-select: none;
            cursor: pointer;

            .kind {
                font-size: 12px;
                color: var(--grey);
            }
        }

        .pack_list_item:hover {
            color: var(--white);
            transition: .5s ease;

            .kind {
                color: var(--white);
                transition: .5s ease;
            }


        }
    }

.pack_item:hover {
    background-color: var(--red);
    color: var(--light);
    transition: .3s ease;

    .pack_list {
        display: flex;
        backdrop-filter: opacity(100%);
        transition: .5s;
    }
}
#Геральт:hover {
    background-color: var(--white);
    color: var(--dark);
}

#Геральт:hover .kind {
    color: var(--dark);
}

#Леонардо:hover {
    background-color: var(--blue);
}

#Халк:hover {
    background-color: var(--green);
}

#Флеш:hover {
    background-color: var(--red);
}

#Скорпион:hover {
    background-color: var(--orange);
}
</style>