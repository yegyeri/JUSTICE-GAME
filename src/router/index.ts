import { createRouter, createWebHistory } from 'vue-router'
import launcher_game from '@/components/launcher_justice/launcher_game.vue'
import game_bar from '../components/launcher_justice/game_bar/game_bar.vue'
import arena_justice from '@/components/launcher_justice/arena_hero/arena_justice.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/game',
      name: 'gameLauncher',
      component: launcher_game,
      alias: '/'
    },
    {
      path: '/game/bar',
      name: 'gameBar',
      component: game_bar,
    },
    {
      path: '/game/arena',
      name: 'arena',
      component: arena_justice,
    },
  ]
})

export default router
