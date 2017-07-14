import axios from 'axios';
import { APIURL, APIKEY } from '../secrets/secrets';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts(params) {
    const request = axios.get(`${APIURL}/posts${APIKEY}`);
    return {
        type: FETCH_POSTS,
        payload : request
    };
}

export function createPost(params) {
    const request = axios.post(`${APIURL}/posts${APIKEY}`, params);
    return {
        type: CREATE_POST,
        payload : request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${APIURL}/posts/${id}${APIKEY}`);
    return {
        type: FETCH_POST,
        payload : request
    };
}

export function deletePost(id) {
    const request = axios.delete(`${APIURL}/posts/${id}${APIKEY}`);
    return {
        type: DELETE_POST,
        payload : request
    };
}
