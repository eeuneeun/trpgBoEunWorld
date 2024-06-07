import React from 'react';
import ImageUploading from 'react-images-uploading';

import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DeleteIcon from '@mui/icons-material/Delete';

export function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList : any, addUpdateIndex : any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload-image-wrapper">
            <div className="btn-group">
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
            </div>

            <div className='thumbnail-wrapper'>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="btn-group">
                  <button onClick={() => onImageUpdate(index)}><SyncAltIcon /></button>
                  <button onClick={() => onImageRemove(index)}><DeleteIcon /></button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}