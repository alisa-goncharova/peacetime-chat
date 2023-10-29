const mutations = {
    UPDATE_MESSAGES(state, payload) {
        state.messages = state.messages.map((message, index) => {
            console.log(index === payload.id);
            if(index === payload.id) {
                console.log({...message, text: payload.text});
                return {...message, text: payload.text}
            }
            return message;
        })
    }
}

export default mutations;