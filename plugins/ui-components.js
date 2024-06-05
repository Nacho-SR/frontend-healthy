import Vue from 'vue'

import UserLogin from '@/components/ui/UserLogin.vue'
import RecetasPatient from '~/components/ui/recetasPatient.vue'
import BarraPacientes from '~/components/ui/BarraPacientes.vue'
import PatientCard from '~/components/ui/PatientCard.vue'
import MedicineCard from '~/components/ui/MedicineCard.vue'
import NextCita from '~/components/ui/NextCita.vue'
import InfoUser from '~/components/ui/InfoUser.vue'
import MyMedicine from '~/components/ui/MyMedicine.vue'

Vue.component('UserLogin', UserLogin)
Vue.component('RecetasPatient', RecetasPatient)
Vue.component('BarraPacientes', BarraPacientes)
Vue.component('PatientCard', PatientCard)
Vue.component('MedicineCard', MedicineCard)
Vue.component('NextCita', NextCita)
Vue.component('InfoUser', InfoUser)
Vue.component('MyMedicine', MyMedicine)
