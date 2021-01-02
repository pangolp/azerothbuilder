import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BroadcastText from '../views/BroadcastText.vue'
import AchievementReward from '../views/AchievementReward.vue'
import CreatureTemplateLocale from '../views/CreatureTemplateLocale.vue'
import CreatureTextLocale from '../views/CreatureTextLocale.vue'
import GameObjectTemplateLocale from '../views/GameObjectTemplateLocale'
import QuestOfferRewardLocale from '../views/QuestOfferRewardLocale'
import QuestRequestItemsLocale from '../views/QuestRequestItemsLocale'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/achievement-reward-locale/',
    name: 'Achievement reward locale',
    component: AchievementReward
  },
  {
    path: '/broadcast-text-locale/',
    name: 'Broadcast text locale',
    component: BroadcastText
  },
  {
    path: '/creature-template-locale/',
    name: 'Creature template locale',
    component: CreatureTemplateLocale
  },
  {
    path: '/creature-text-locale/',
    name: 'Creature text locale',
    component: CreatureTextLocale
  },
  {
    path: '/gameobject-template-locale/',
    name: 'Gameobject template locale',
    component: GameObjectTemplateLocale
  },
  {
    path: '/quest-offer-reward-locale/',
    name: 'Quest offer reward locale',
    component: QuestOfferRewardLocale
  },
  {
    path: '/quest-request-items-locale/',
    name: 'Quest request items locale',
    component: QuestRequestItemsLocale
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
