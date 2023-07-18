import {Calculator} from './components/index';
import {Container} from './components/index';
import './assets/sass/main.scss'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);
export function App() {
  return (
       
        <Container>
          <Calculator />
        </Container>

  )
}