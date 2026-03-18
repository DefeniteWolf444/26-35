import { StyledEngineProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
)
