
// export const myAction = ( state ) => {

// }

export const setEntries = (state, entries ) => {
    state.entries = [ ...state.entries, ...entries]// Crear un nuevo arreglo con los valores antiguos y nuevos
    state.isLoading = false
}

export const updateEntry = (state, entry) => {

    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
    // Cual es la entrada que coincide con el id
}

export const addEntry = (state, entry) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.entries = [entry, ...state.entries]
}


export const deleteEntry = (state, id) => {

    state.entries = state.entries.filter(entry => entry.id !== id) // Filtrado
}