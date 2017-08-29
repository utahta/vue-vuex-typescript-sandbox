import Vuex from 'vuex'
import {DefineActions, DefineGetters, DefineMutations} from "vuex-type-helper";

export interface State {
    name: string
}

export interface Getters {
    name: string
}

export interface Mutations {
    name: {
        name: string
    }
}

export interface Actions {
    name: {
        name: string
    }
}

const state: State = {
    name: 'World'
};

const getters: DefineGetters<Getters, State> = {
    name: state => state.name
};

const mutations: DefineMutations<Mutations, State> = {
    name(state, {name}) {
        state.name = name;
    }
};

const actions: DefineActions<Actions, State, Mutations, Getters> = {
    name({ commit }, payload) {
        commit('name', payload);
    }
};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = Vuex.createNamespacedHelpers<State, Getters, Mutations, Actions>('app');

export const app = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};
