const POST_TYPE_MAP = {
    HOT: 'hot',
    NEWS: 'news',
    RISING: 'rising'
}

const fetchRedditPostsByType = (type) => {
    if(!POST_TYPE_MAP[type]) throw new Error('Tipo não existe no mapa');

    return fetch(`https://api.reddit.com/r/artificial/${POST_TYPE_MAP[type]}`);
};

export const fetchPostsFromReddit = async () => {
    const hotPostsPromise = fetchRedditPostsByType('HOT')
    const newsPostsPromise = fetchRedditPostsByType('NEWS')
    const risingPostsPromise = fetchRedditPostsByType('RISING')

    return await Promise.all([hotPostsPromise, newsPostsPromise, risingPostsPromise]);
}