import { useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import RepositoriesList from './RepositoriesList';

import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [query, setQuery] = useState('');

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300)
  , []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h2>Gitopticon 🕵️</h2>
          <input placeholder={"Search repositories"} onChange={debouncedChangeHandler} />
          {query && <RepositoriesList query={query} />}
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
