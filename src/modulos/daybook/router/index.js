

export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modulos/daybook/layuots/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modulos/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "entry" */ '@/modulos/daybook/views/EntryView.vue'),
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]

}