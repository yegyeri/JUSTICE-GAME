import { EnemyClass } from "./enemy_class";

const utopec = new EnemyClass({
    id: 1,
    name: 'Утопец',
    kind: 'Утопленник',
    status: 'Моб',
    danger: 'Низкая',
    state: 'Жив',
    fullHealth: 150,
    health: 150,
    weapon: 'Когти',
    minDamage: 20,
    maxDamage: 25,
    buff: 0,
    alert: ''
})
const footNinja = new EnemyClass({
    id: 2,
    name: 'Ниндзя',
    kind: 'Клан Фут',
    status: 'Моб',
    danger: 'Низкая',
    state: 'Жив',
    fullHealth: 120,
    health: 120,
    weapon: 'Катана',
    minDamage: 25,
    maxDamage: 30,
    buff: 0,
    alert: ''

})
const stormTrooper = new EnemyClass({
    id: 3,
    name: 'Штурмовик',
    kind: 'Имперский',
    status: 'Моб',
    danger: 'Низкая',
    state: 'Жив',
    fullHealth: 160,
    health: 160,
    weapon: 'Бластер',
    minDamage: 30,
    maxDamage: 35,
    buff: 0,
    alert: ''

})
const kreep = new EnemyClass({
    id: 4,
    name: 'Крип-Мечник',
    kind: 'Дота',
    status: 'Моб',
    danger: 'Низкая',
    state: 'Жив',
    fullHealth: 100,
    health: 100,
    weapon: 'Мечик',
    minDamage: 15,
    maxDamage: 20,
    buff: 0,
    alert: ''

})
const reverseFlash = new EnemyClass({
    id: 5,
    name: 'Анти-Флеш',
    kind: 'Антигерой',
    status: 'Мини-босс',
    danger: 'Средняя',
    state: 'Жив',
    fullHealth: 230,
    health: 230,
    weapon: 'Скорость',
    minDamage: 55,
    maxDamage: 60,
    buff: 0,
    alert: ''

})
const subZero = new EnemyClass({
    id: 6,
    name: 'Саб-Зиро',
    kind: 'Ниндзя',
    status: 'Мини-босс',
    danger: 'Средняя',
    state: 'Жив',
    fullHealth: 220,
    health: 220,
    weapon: 'Мороз',
    minDamage: 45,
    maxDamage: 55,
    buff: 0,
    alert: ''

})
const tanos = new EnemyClass({
    id: 7,
    name: 'Танос',
    kind: 'Инопланетянин',
    status: 'Босс',
    danger: 'Высокая',
    state: 'Жив',
    fullHealth: 320,
    health: 320,
    weapon: 'Перчатка',
    minDamage: 65,
    maxDamage: 70,
    buff: 0,
    alert: ''

})
const shreder = new EnemyClass({
    id: 8,
    name: 'Шредер',
    kind: 'Клан Фут',
    status: 'Босс',
    danger: 'Высокая',
    state: 'Жив',
    fullHealth: 340,
    health: 340,
    weapon: 'Катана',
    minDamage: 65,
    maxDamage: 75,
    buff: 0,
    alert: ''

})
const imlerih = new EnemyClass({
    id: 9,
    name: 'Имлерих',
    kind: 'Эльф ДО',
    status: 'Босс',
    danger: 'Запредельная',
    state: 'Жив',
    fullHealth: 450,
    health: 450,
    weapon: 'Белый Хлад',
    minDamage: 60,
    maxDamage: 80,
    buff: 0,
    alert: ''

})

export {utopec, footNinja, stormTrooper, kreep, reverseFlash, subZero, tanos, shreder, imlerih}