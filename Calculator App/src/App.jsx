import {Button} from './components/index';
import {Calculator} from './components/index';
import {Header} from './components/index';
import './assets/sass/main.scss'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);
export function App() {
  return (
       <div>
          <Header/>
          <Calculator/>
       </div>
  )
}