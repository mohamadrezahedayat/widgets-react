import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  { label: 'Persians', value: 'fa' },
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
  { label: 'French', value: 'fr' },
];

export default function Translate() {
  const [language, setlanguage] = useState(options[0]);

  const [text, settext] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => settext(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='Select a Language'
        selected={language}
        onSelectedChange={setlanguage}
        options={options}
      />
      <h3 className='ui header'></h3>
      <Convert text={text} language={language} />
    </div>
  );
}
