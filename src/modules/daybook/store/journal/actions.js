
// export const myAction = async ({ commit }) => {
// }

//export const loadEntries = async (/*{ commit }*/) => {
//}

//export const updateEntry = async (/*{ commit }*/) => {
//}


//export const createEntry = async (/*{ commit }*/) => {
//}

// export const myAction = async ({ commit }) => {
// }


import journalApi from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
   
        
    const { data } = await journalApi.get( '/entries.json' )// Desestructuro y cojo la data
    // Nos devuelve un objeto con mas objetos en su interior así que:
    /* console.log(data)*/
    // Si no tenemos data (hemos borradao todos los componentes ) mandamos un arreglo vacio
    if (!data) { 
        commit('setEntries',[])
        return

    }
    const entries = []

    for ( let id of Object.keys ( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }
    //Acabamos de crear un array con nombre entries de objetos 
    //console.log(entries)
    commit('setEntries', entries) // Funcion y argumento
   
}


export const updateEntry = async ({ commit }, entry) => {  // entry debe de ser un parámetro

    const { date, picture, text } = entry// Desestructurar
    const dataToSave = { date, picture, text }
    // put para update  firebase
    const resp = await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    console.log(resp)

    // Commit de una mutation -> updateEntry
    commit('updateEntry', { ...entry })
}

export const createEntry = async ({ commit }, entry) => {

    // dataToSave
    const { date, picture, text } = entry // Desestructurar
    const dataToSave = { date, picture, text }
    // post para nueva entrada  firebase
    const { data } = await journalApi.post(`entries.json`, dataToSave)

    dataToSave.id = data.name

    commit('addEntry', dataToSave) // A la mutación

    return data.name
}


export const deleteEntry = async ({ commit }, id) => {
    // delete para firebase
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)

    return id
}