import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/styles.scss'

createApp( App )
    .use( store )      // Colocamos en lo mas alto de la tabla.index.js de el primer store
    .use (router )
    .mount( '#app' )
