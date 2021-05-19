import Header from './components/header';
import './App.scss';
import ThemeProvider from 'ui/theme-provider';

function App() {
  return (
    <ThemeProvider theme={{ backgroundColor: 'black' }}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
