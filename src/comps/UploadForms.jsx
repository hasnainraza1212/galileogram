import React, { useState, useEffect,useRef } from 'react';
import '.././index.css';
import ProgressBar from './ProgressBar';
import { message, Upload } from 'antd';

import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;
const UploadForms = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
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




  const handleDrop = (event) => {
    event.preventDefault();
    const { file } = event.dataTransfer;
    console.log(file)
  
  }
    
    const handleDragOver = (event) => {
      event.preventDefault()
    }
  
     const handleDragStart = (event) => {
          event.dataTransfer.setData("text/plain", event.target.id)
      }




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
    <Dragger  onDrop = {handleDrop} onDragOver = {handleDragOver} onDragStart={handleDragStart} className='uploadBox'>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className='ant-upload-text'>Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
        </label>
        <p id='InvalidImg'>{error}</p>
      </div>
      {file && <ProgressBar file={file} updateFile={setFile} />}

    </form>
  );
};

export default UploadForms;
