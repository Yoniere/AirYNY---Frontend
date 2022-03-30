import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Quasar } from 'quasar'
import VCalendar from 'v-calendar';
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';
// import { closeDirevtive, focusDirective } from './directives'
import HistogramSlider from "vue3-histogram-slider";
import "vue3-histogram-slider/dist/histogram-slider.css";



//style
import './style/styles.scss'



// Use plugin with defaults
const app = createApp(App)
// app.use(VCalendar, { SetupCalendar, Calendar, DatePicker })


app.use(VueGoogleMaps, {
    load: {
        key: 'api key',

    }
})


// app.directive('custom-on', focusDirective)
// app.directive('close-modal', closeDirevtive)
app.use(store)
app.use(Quasar)
app.use(router)
app.use(ElementPlus)
app.component(HistogramSlider.name, HistogramSlider);

app.mount('#app')