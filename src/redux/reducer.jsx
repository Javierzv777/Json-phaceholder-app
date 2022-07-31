import { GET_POSTS } from "./actions";

const initialState = {
    posts: [
        { id: 1, userId: 'Snow', title: 'Jon', body:'fdfd', comments: 0 },
        { id: 2, userId: 'Lannister', title: 'Cersei', body:'fdf', comments: 42 },
        { id: 3, userId: 'Lannister', title: 'Jaime',  body:'fdfd', comments: 45 },
        { id: 4, userId: 'Stark', title: 'Arya', body:'fdf', comments: 16 },
        { id: 5, userId: 'Targaryen', title: 'Daenerys', body:'fdfd', comments: null },
        { id: 6, userId: 'Melisandre', title: null, body:'fdfd', comments: 150 },
        { id: 7, userId: 'Clifford', title: 'Ferrara', body:'dfd', comments: 44 },
        { id: 8, userId: 'Frances', title: 'Rossini', body:'dfd', comments: 36 },
        { id: 9, userId: 'Roxie', title: 'Harvey', body:'dfdf', comments: 65 },
      ],
    users : [],
    comments : []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_POSTS:
            return {
                ...state, 
                posts:[...payload]
            }
        default: return state;
    }
}