import axios from 'axios';
export const GET_POSTS = "GET_POSTS";

export const newPoem = (data) => {
    return async (dispatch) => {
        axios.post(`/posts`, {...data, id:1})
          .then(res => console.log(res.data))

    }
}

export const getPosts = () => {
    return async (dispatch) => {
        axios(`/posts`)
        .then( response => dispatch({type: GET_POSTS, payload: response.data }))
        // .then (()=>fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        // .then((response) => response.json())
        // .then((json) => console.log(json)))

    }
}

export const getPost = (id) => {
    return async (dispatch) => {
        axios(`/posts/${id}/comments`)
        // .then( response => dispatch({type: GET_POSTS, payload: response.data }))
        .then( response => console.log( response ) )
    }
}

