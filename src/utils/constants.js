export const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const NOW_PLAYING_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmFiNzE1YzY3YmQ2M2FkOTc0ZmEzZGY4ZjZiYWI5YiIsIm5iZiI6MTc0MDc0Nzc0Ni4zOTgwMDAyLCJzdWIiOiI2N2MxYjNlMjhjMzg2YzRlNWJjOGZkNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Pv1rBEU8ji0h56FG2SeWYw8oZs1ObS7IDTNqXKwxPnk'
    }
};