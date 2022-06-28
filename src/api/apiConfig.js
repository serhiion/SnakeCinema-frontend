const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '017c2c32804753c758079ffa3dc983d9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;