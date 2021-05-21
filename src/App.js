import Header from './components/header';
import './App.scss';
import ThemeProvider from 'ui/theme-provider';
import Buttons from 'components/buttons';

function App() {
  return (
    <ThemeProvider theme={{ backgroundColor: 'black' }}>
      <Header />
      <div><Buttons /></div>
    </ThemeProvider>
  );
}

export default App;
