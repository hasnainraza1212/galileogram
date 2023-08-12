import React, { useState } from 'react'
import uploadIcon from './../assets/image/upload.png'
function UploadFile({ settingFile, settingError }) {
    const handleDrop = (event) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/avif', 'image/webp', 'image/gif'];
        event.preventDefault();
        const { files } = event.dataTransfer;
        if (files.length > 0) {
            const file = [...files][0]
            if (file && allowedTypes.includes(file.type)) {
                settingFile(...[files][0])
                settingError('');
            } else {
                settingFile(null);
                settingError('Invalid format');
            }
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault()
    }
    const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id)
    }
    return (
        <div className='uploadOuterBox'>
            <div className="file-upload-area" onDragOver={handleDragOver} onDrop={handleDrop} >
                <div className="uploadBox" draggable="true" onDragStart={handleDragStart}>
                    <p><img className='uploadIcon' src={uploadIcon} alt="" /></p>
                    <p className='uploadText'>Click or drag file to this area to upload</p>
                    <p className='descriptionUploadImage'>Support for a single. Strictly prohibited from uploading company data or other banned files.</p>
                    <div className='browseFiles'>
                        <p>Browse Files</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UploadFile
