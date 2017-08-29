import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"

// refs: https://github.com/Anonyfox/vuex-store-module-example

export class State {
    count: number = 0;
}

const getters = <GetterTree<State, any>> {
    count(state: State): number {
        return state.count
    }
};

const mutations = <MutationTree<State>> {
    inc(state: State, amount: number) {
        state.count += amount
    },
    dec(state: State) {
        state.count -= 1
    }
};

const actions = <ActionTree<State, any>> {
    inc(store: ActionContext<State, any>, amount: number) {
        store.commit('inc', amount)
    },
    dec(store: ActionContext<State, any>) {
        store.commit('dec')
    }
};

export const counter = {
    state: new State(),
    getters: getters,
    mutations: mutations,
    actions: actions
};
