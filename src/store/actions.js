const actions = {
    updateMessageAction(context, payload) {
        context.commit('UPDATE_MESSAGES', payload);
    },
    addMessageAction(context, payload) {
        context.commit('ADD_MESSAGE', payload)
    }
}

export default actions;