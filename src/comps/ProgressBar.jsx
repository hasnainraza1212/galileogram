import React, { useEffect } from 'react';
import { useStorage } from '../hooks/UseStorage';
const ProgressBar = ({ file, updateFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);
  useEffect(() => {
    if (url) {
      updateFile(null);
    }
    if (progress < 100){
    }
  }, [url, updateFile, progress]);
  return progress > 0 && progress < 100 ? (
    <div className='progress' style={{ width: `${progress}%` }}></div>
  ) : null;
};
export default ProgressBar;
