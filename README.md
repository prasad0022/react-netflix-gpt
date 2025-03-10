# NetflixGPT

NetflixGPT is a modern web application that combines the functionality of Netflix's movie catalog with the power of GPT-based search. Users can explore trending movies, watch trailers, and search for movies with intelligent suggestions powered by OpenAI's GPT.

## Features

- **User Authentication:** Sign-up and Sign-in functionality using Firebase Authentication.
- **Movie Catalog:** Browse now playing movies fetched from TMDB API.
- **Video Background:** Dynamic video background displaying official trailers.
- **GPT Search:** Search for movies using natural language prompts with GPT integration.

---

## Directory Structure

```
prasad0022-react-netflix-gpt/
├── README.md
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
├── vite.config.js
├── .firebaserc
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── components/
    │   ├── Browse.jsx
    │   ├── Header.jsx
    │   ├── Login.jsx
    │   ├── Browse Components/
    │   │   ├── MainContainer.jsx
    │   │   ├── MovieCard.jsx
    │   │   ├── MovieList.jsx
    │   │   ├── SecondaryContainer.jsx
    │   │   ├── VideoBackground.jsx
    │   │   └── VideoHeader.jsx
    │   └── GPT/
    │       ├── GPTSearch.jsx
    │       ├── SearchInput.jsx
    │       └── SearchResults.jsx
    ├── hooks/
    │   ├── useMovieTrailer.jsx
    │   ├── useNowPlayingMovies.jsx
    │   └── useSearchMovie.jsx
    └── utils/
        ├── validateForm.js
        ├── mock_data/
        │   └── mockData.js
        └── store/
            ├── appStore.js
            ├── gptSlice.js
            ├── moviesSlice.js
            └── userSlice.js
```

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/prasad0022-react-netflix-gpt.git
cd prasad0022-react-netflix-gpt
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**
   Add the following environment variables:

```
VITE_FIREBASE_API_KEY=<your_firebase_api_key>
VITE_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
VITE_FIREBASE_PROJECT_ID=<your_firebase_project_id>
VITE_TMDB_API_KEY=<your_tmdb_api_key>
```

4. **Run the project**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

---

## Usage

- **Sign In / Sign Up:** Register or log in using Firebase Authentication.
- **Browse Movies:** Displays now playing movies fetched from TMDB API.
- **Search Movies with GPT:** Use natural language search to find movies.

---

## Key Files & Directories

- **`components/`** - Contains core UI components like Header, Login, and Browse.
- **`hooks/`** - Custom hooks for data fetching and logic handling.
- **`utils/`** - Utility functions and mock data for improved development.
- **`store/`** - Redux store configuration and slices for state management.

---

## Dependencies

- **React** - For building the UI.
- **Redux Toolkit** - For efficient state management.
- **Firebase** - For user authentication.
- **TMDB API** - For fetching movie data.
- **OpenAI GPT** - For intelligent search capabilities.
- **Tailwind CSS** - For responsive and modern styling.

---

## Contributing

Feel free to fork the repo, create a branch, and submit pull requests. Any contributions are welcome! 😊
