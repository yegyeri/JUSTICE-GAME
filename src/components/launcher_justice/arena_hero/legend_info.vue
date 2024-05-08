<script setup lang="ts">
</script>

<template>
    <div class="legend_card">
        <header>
            <span>Легенда</span>
        </header>
        <main>
            <div class="skill_about">
                <i class='bx bxs-rocket  range'></i>
                <span class=" range">Дальняя атака</span>
            </div>
            <div class="skill_about ">
                <i class='bx bxs-injection sick'></i>
                <span class="sick">Ослабление</span>
            </div>
            <div class="skill_about ">
                <i class='bx bxs-zap abillity'></i>
                <span class="abillity">Способность</span>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
.legend_card {
    cursor: pointer;
    width: 100%;
    height: 45%;
    background-color: var(--light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 30px;
    header{
        width: 100%;
        height: 30%;
        padding: 30px;
        background-color: var(--red);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        color: var(--white);
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
    }
    main{
        width: 100%;
        height: 70%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 10px;
        .skill_about{
            width: 100%;
            height: 33%;
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 10px;
            i{
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 25px;
                color: var(--white);
                border-radius: 10px;
            }
            span{
                width: calc(100% - 60px);
                height: 40px;
                display: flex;
                padding: 0px 15px;
                justify-content: start;
                align-items: center;
                font-size: 20px;
                color: var(--white);
                border-radius: 10px;
            }
        }
    }
}
</style>