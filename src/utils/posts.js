import axios from 'axios';

const postCategories = async () => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + 'post-categories')

    return res.status === 200 ? res.data : [];
}

const postByCategoryId = async (categoryId) => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + `post-list/${categoryId}`)

    return res.status === 200 ? res.data : [];
}

const postDetail = async (postId) => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + `post-details/${postId}`)

    return res.status === 200 ? res.data : [];
}

const latestPosts = async ()  => {
    const res = await axios.get(import.meta.env.VITE_BASE_URL + 'post-newest')

    return res.status === 200 ? res.data : [];
}

export {
    latestPosts, postByCategoryId, postCategories, postDetail
};
