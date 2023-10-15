// Este index es el que vamos a terminar importando al store que definiremos

import state from './state'
import * as actions  from './actions'
import * as getters  from './getters'
import * as mutations  from './mutations'

const journalModule = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state

}

export default journalModule 