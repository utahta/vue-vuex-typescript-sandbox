import Vue from 'vue'
import Component from 'vue-class-component'
import * as Template from './template.html'
import {Dispatcher} from "vuex-type-helper";
import * as app from '../../store/modules/app'
import * as jiro from '../../store/modules/jiro'

@Template
@Component<Jiro>({
    computed: {
        ...jiro.mapGetters(['imgURL'])
    },

    methods: {
        ...app.mapActions(['name']),
        ...jiro.mapActions(['prev', 'next'])
    }
})
export default class Jiro extends Vue {
    name: (payload: {name: string}) => void;

    created() {
        this.name({name: 'Jiro'});
        //this.$store.dispatch<Dispatcher<root.Actions>>({type: 'name', name: 'Jiro'});
    }
}
