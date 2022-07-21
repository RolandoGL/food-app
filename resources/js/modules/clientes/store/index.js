import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
// import * as mutations from ''

const clienteModule = {
    nameSpaced: true,
    actions,
    getters,
    mutations,
    state
}
export default clienteModule