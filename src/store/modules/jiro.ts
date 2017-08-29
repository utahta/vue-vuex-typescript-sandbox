import Vuex from 'vuex'
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper'

// refs: https://github.com/ktsn/vuex-type-helper

export interface State {
    imgURLs: string[]
    idx: number
}

export interface Getters {
    imgURL: string
}

export interface Mutations {
    prev: {}
    next: {}
}

export interface Actions {
    prev: {}
    next: {}
}

const state: State = {
    imgURLs: [
        'https://pbs.twimg.com/media/DIJ6EbjVwAAkKoc.jpg:small',
        'https://pbs.twimg.com/media/DIJ6EbkUAAAQlvp.jpg:small',
        'https://pbs.twimg.com/media/DIJ6EbmU0AM2fiK.jpg:small',
        'https://pbs.twimg.com/media/DIJ6EbjU0AI-iZi.jpg:small'
    ],
    idx: 0
};

const getters: DefineGetters<Getters, State> = {
    imgURL: state => state.imgURLs[state.idx]
};

const mutations: DefineMutations<Mutations, State> = {
    prev(state) {
        state.idx -= 1;
        state.idx = state.idx < 0 ? 0 : state.idx;
    },

    next(state) {
        state.idx += 1;
        state.idx = state.idx >= state.imgURLs.length ? state.imgURLs.length - 1 : state.idx;
    }
};

const actions: DefineActions<Actions, State, Mutations, Getters> = {
    prev({ commit }, payload) {
        commit('prev', payload);
    },

    next({ commit }, payload) {
        commit('next', payload);
    }
};

export const {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} = Vuex.createNamespacedHelpers<State, Getters, Mutations, Actions>('jiro');

export const jiro = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
};
