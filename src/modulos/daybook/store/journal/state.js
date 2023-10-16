// El state es reactivo y cuando se cambie el state vamos a notificar a 
//todos los componentes o los lugares donde esten escuchando este state

export default () => ({

    isLoading: true,
    entries: [
        {
            date: new Date().toDateString(),
            id: '1',
            picture: null,
            text: 'Ipsum gravida vel pretium tellus tincidunt integer eu augue augue nunc elit dolor,luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut.',
        },
        {
            date: new Date().toDateString(),
            id: '2',
            picture: null,
            text: ' placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut.',
        },
        {
            date: new Date().toDateString(),
            id: '3',
            picture: null,
            text: ' gravida vel pretium tellus tincidunt integer eu augue augue nunc elit dolor,luctus plsque euismod, iaculis eu lacus nunc mi elit, vehicula ut.',
        },
    ]

})

// Donde se almacena la información