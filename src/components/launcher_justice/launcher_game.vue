<script setup lang="ts">
</script>

<template>
    <div class="launch_home">
        <div class="logo">
            <img src="./img/logo.png" alt="logo">
            <span>JUSTICE</span>
        </div>
        <div class="menu_list">
            <router-link to="/game/bar" class="link">Пройти в Бар!</router-link>
        </div>
    </div>
</template>

<style scoped>
.launch_home{
    width: 100%;
    height: 100vh;
    background-image: url('./img/launch_back.jpg');
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    .logo{
        width: 50%;
        height: 20%;
        margin-left: 500px;
        display: flex;
        gap: 20px;
        align-items: center;
        img{
            width: 100px;
            height: 100px;
        }
        span{
            font-size: 70px;
            color: var(--light);
        }
    }
    .menu_list{
        width: 50%;
        height: 50%;
        margin-left: 500px;
        display: flex;
        .link{
            height: 80px;
            width: 430px;
            background-color: var(--light);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            color: #1F3E54;
            text-decoration: none;
            font-weight: 700;
            font-size: 30px;
        }
        .link:hover{
            background-color: var(--red);
            color: var(--light);
            transition: .5s ease;
        }
    }
}
</style>