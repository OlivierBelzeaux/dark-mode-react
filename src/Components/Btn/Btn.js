import React, {useContext} from 'react';
import './Btn.css'
import {ThemeContext} from '../../Context/ThemeContext'

export default function Btn() {

  const {toggleTheme, theme} = useContext(ThemeContext);

  return <button onClick={toggleTheme} className='btn-toggle'>{theme ? "Light" : "Dark"}</button>;
}
