import { createStore } from 'vuex'
import clienteModule from '../modules/clientes/store'
const store = createStore({
    modules:{
        clienteModule
    }
})
export default  store;
