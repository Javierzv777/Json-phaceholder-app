import axios from 'axios';
export const NEW_POST = "NEW_POST";
export const GET_POSTS = "GET_POSTS";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_POST = "GET_POST"; 
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const newPost = (data) => {
    return async (dispatch) => {
        axios.post(`/posts`, {...data, id:1})
          .then(res => dispatch({type: NEW_POST, payload: NEW_POST}))

    }
}

export const getPosts = () => {
    return async (dispatch) => {
        axios(`/posts`)
        .then( response => dispatch({type: GET_POSTS, payload: response.data }))

    }
}

export const getPost = (id) => {
    return async (dispatch) => {
        axios(`/posts/${id}/comments`)
        // .then( response => dispatch({type: GET_POSTS, payload: response.data }))
        .then( response =>{
            dispatch({type: GET_POST, payload: id})
            dispatch({type: GET_COMMENTS, payload: response.data}) })
    }
}

export const editPost = (data) => {
    return async (dispatch) => {
        axios.put(`/posts/${data.id}`, data)
        // .then( response => dispatch({type: GET_POSTS, payload: response.data }))
        .then( response =>{ console.log(response)
            dispatch({type: UPDATE_POST, payload: response.data})})
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        axios.delete(`/posts/${id}`)
        .then( response =>{ console.log(id)
            dispatch({type: DELETE_POST, payload: id})})
    }
}
