const actions = {
    updateMessageAction(context, payload) {
        context.commit('UPDATE_MESSAGES', payload);
    }
}

export default actions;