import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


import '@syncfusion/ej2-base/styles/tailwind.css';
import '@syncfusion/ej2-buttons/styles/tailwind.css';
import '@syncfusion/ej2-dropdowns/styles/tailwind.css';
import '@syncfusion/ej2-inputs/styles/tailwind.css';
import '@syncfusion/ej2-navigations/styles/tailwind.css';
import '@syncfusion/ej2-popups/styles/tailwind.css';
import '@syncfusion/ej2-splitbuttons/styles/tailwind.css';
import '@syncfusion/ej2-react-spreadsheet/styles/tailwind.css';
import { registerLicense } from '@syncfusion/ej2-base';
import { HashRouter } from 'react-router-dom';

registerLicense('Ngo9BigBOggjHTQxAR8/V1JGaF1cXmhKYVF2WmFZfVhgcl9DaFZRRWYuP1ZhSXxVdkdiUX9ZcHZWQmVZV0V9XEA=')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <HashRouter>
    <App />
     </HashRouter>
  </StrictMode>,
)
