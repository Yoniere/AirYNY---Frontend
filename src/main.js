import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/styles.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Quasar } from 'quasar'
import VCalendar from 'v-calendar';
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';


// Use plugin with defaults
const app = createApp(App)
// app.use(VCalendar, { SetupCalendar, Calendar, DatePicker })


app.use(store)
app.use(Quasar)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
