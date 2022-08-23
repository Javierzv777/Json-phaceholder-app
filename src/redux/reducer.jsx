import { GET_POSTS, GET_POST, GET_COMMENTS, UPDATE_POST, 
 NEW_POST,   DELETE_POST } from "./actions";

const initialState = {
    posts: [],
    users : [],
    comments : [],
    post:null,
    register: null
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_POSTS:
            return {
                ...state, 
                posts:[...payload],
                register: payload.length
            }
        case GET_COMMENTS:
            return {
                ...state, 
                comments: payload
            }
        case GET_POST:
            return {
                ...state, 
                post: state.posts.find(element => element.id === payload)
            }
        case UPDATE_POST:
            state.posts.forEach(post => {
                if( post.id === payload.id) {
                    post.title = payload.title;
                    post.body = payload.body
                }
            })
            return {
                ...state,
                posts: [...state.posts] 
            }
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== payload)]
            }
        case "CLEAN_POST":
            return {
                ...state,
                post:null,
                comments:[]
            }
        case NEW_POST:
                return {
                    ...state,
                    posts: [...state.posts, {...payload, id: state.register+1}],
                    register: state.register+1
                }
        default: return state;
    }
}