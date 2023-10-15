// Este index es el que vamos a terminar importando al store que definiremos

import state from './state'
import * as actions state from './actions'
import * as getters state from './getters'
import * as mutations state from './mutations'


const myCustomModule = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state

}

export default myCustomModule 