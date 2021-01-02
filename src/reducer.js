export const initialState = {
    user: null,
    // token: "BQBSTBA8etl0K8lR9iva9Y8aAGOaQTlvGECnGPwfia4WByrkergj4sDGGsfNe_2aODw3d9jraDRcIoqTaK7WRS5FbGuPh5JGKzPXrLEuqgcgAr00i-z2qHQVshiy5NPvNWD35rlBFQHtpWW8ValiIUbsJgWxioyFC-R7dA",
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log("Action!! -", action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
            
        default:
            return state;
    }
}

export default reducer;