import Vue from 'vue'
import {mapActions} from 'vuex'
import Component from 'vue-class-component'
import {Getter, Action} from 'vuex-class'
import * as Template from './template.html'

@Template
@Component<Counter>({
    methods: {
        ...mapActions(['inc', 'dec'])
    }
})
export default class Counter extends Vue {
    @Getter count: number;
    @Action('app/name') name: any;

    created() {
        this.name({name: 'Counter'});
    }
}
