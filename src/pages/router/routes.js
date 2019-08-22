import CarShop from '../CarShop/car.vue'
import Card from '../Card/card.vue'
import First from '../First/First.vue'
import Person from '../Person/Person.vue'
import Three from '../Three/Three.vue'
import Search from '../Search/Search.vue'
import Number from '../Number/Number.vue'
import Email from '../Email/Email.vue'


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
    component:Person,    
    
   },
   {
    path:'/number',
    component:Number
  },
  {
    path:'/email',
    component:Email
  },
    
   {
    path:'/three',
    component:Three 
   },
   {
    path:'/search',
    component:Search
 },
] 


