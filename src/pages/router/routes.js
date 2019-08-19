import CarShop from '../CarShop/car.vue'
import Card from '../Card/card.vue'
import First from '../First/First.vue'
import Person from '../Person/Person.vue'
import Three from '../Three/Three.vue';

export default [
  {
      path:'/car',
      component:CarShop
  },
  {
    path:'/first',
    component:First 
   },
   {
    path:'/card',
    component:Card 
   },
   {
    path:'/person',
    component:Person 
   },
   {
    path:'/three',
    component:Three 
   }
] 


