import React from 'react';
import { useState } from 'react';

export function Converter() {

  const [rgbText, setRgb] = useState('rgb()')

  const handleColor = (e) => {
    const hex = e.target.value
    
    if (/^#.{6}$/.test(hex)) {
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        const rgbRaw = hexToRgb(hex);
        const rgb = `rgb(${rgbRaw.r}, ${rgbRaw.g}, ${rgbRaw.b})`
        setRgb(rgb);
        const container = document.querySelector('.container')
        container.style.backgroundColor = rgb;
      } else {
        setRgb('Ошибка!');
      }
    }
  };

  
  return (
    <div className='form-container'>
      <form className='form'>
        <label htmlFor='hex'></label>
        <input type='text' id='hex' className='hex' onChange={handleColor} placeholder="#код цвета" />
      </form>
      <div className='rgb'>
        <div className='rgb-text'>{rgbText}</div>
      </div>
    </div>
  )

}

export function hexToRgb(hex) {  
    let num = parseInt(hex.slice(1), 16);  
    let r = (num >> 16) & 255;  
    let g = (num >> 8) & 255;  
    let b = num & 255;  
    return {'r': r, 'g': g, 'b': b};  
}  