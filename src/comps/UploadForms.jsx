import React, { useState, useEffect, useRef } from 'react';
import '.././index.css';
import ProgressBar from './ProgressBar';
import UploadFile from './UploadFile';
const UploadForms = () => {
const [file, setFile] = useState(null);
const [error, setError] = useState('');
const [input, setInput] = useState(true)
const allowedTypes = ['image/jpeg', 'image/png', 'image/avif', 'image/webp', 'image/gif'];
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
  useEffect(() => {
    if (!isFirstRender.current) {
    } else {
      isFirstRender.current = false;
    }
  }, [file]);
  return (
    <form action="">
      {
        input && <div className='inputContainer'>
          <input
            type='file'
            name=''
            onInput={handleFileInputChange}
            id='fileInput'
          />{' '}
          <label htmlFor='fileInput' id='labelInputImage'>
            <UploadFile settingError={setError} settingFile={setFile} />
          </label>
          <p id='InvalidImg'>{error}</p>
        </div>
      }
      {file && <ProgressBar file={file} updateFile={setFile} />}
    </form>
  );
};
export default UploadForms;

