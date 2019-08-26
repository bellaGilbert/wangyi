import CarShop from '../CarShop/car.vue'
import Card from '../Card/card.vue'
import First from '../First/First.vue'
import Person from '../Person/Person.vue'
import Three from '../Three/Three.vue'
import Search from '../Search/Search.vue'
import Number from '../Number/Number.vue'
import Email from '../Email/Email.vue'
import ChangeHome from "../ChangeHome/ChangeHome.vue"


export default [
  {
      path:'/car',
      component:CarShop,
      meta:{
        isShow:true
      }
  },
  {
    path:'/first/:id',
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
    path:'/three/:id',
    component:Three,
    
   },
   {
    path:"/changeHome",
    component:ChangeHome
   },
   {
    path:'/search',
    component:Search
 },
 {
   path:"/",
   redirect:"/first"
 }
] 


