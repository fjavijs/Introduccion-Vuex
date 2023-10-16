//// Los getters traer informacion del state para procesarla

export const getEntriesByTerm = (state) => /*(term = '') =>*/ { /* este getter va mal OJO */
    return state.entries
//    if (term.length === 0) return state.entries
//    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}


export const getEntryById = (state) => (id = '') => {
   
    const entry = state.entries.find(entry => entry.id === id)
    //console.log(entry)
    if (!entry) return

    return { ...entry }
}