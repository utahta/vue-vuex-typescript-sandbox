import Vue from 'vue'
import Component from 'vue-class-component'
import {Getter} from 'vuex-class'
import * as Template from './template.html'

@Template
@Component<App>({})
export default class App extends Vue {
    @Getter('app/name') name: string
}
