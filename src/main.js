import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';


import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'                         //icons

const app = createApp(App)

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.use(PrimeVue);

app.mount('#app')
