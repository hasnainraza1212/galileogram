import React, { useState, useEffect,useRef } from 'react';
import '.././index.css';
import ProgressBar from './ProgressBar';

const UploadForms = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const allowedTypes = ['image/jpeg', 'image/png'];
  const isFirstRender = useRef(true);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Invalid format');
    }
  };

  // This useEffect will run after the first render
  useEffect(() => {
    if (!isFirstRender.current) {
    } else {
      isFirstRender.current = false;
    }
  }, [file]);

  return (
    <form action="">
      <div className='inputContainer'>
        <input
          type='file'
          name=''
          onInput={handleFileInputChange}
          id='fileInput'
        />{' '}
        <label htmlFor='fileInput' id='labelInputImage'>
          <p>+</p>
        </label>
        <p id='InvalidImg'>{error}</p>
      </div>
      {file && <ProgressBar file={file} updateFile={setFile} />}
    </form>
  );
};

export default UploadForms;
