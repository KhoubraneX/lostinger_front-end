

import React from 'react';
import { Link } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
export default function Gallery({galleryData , setGalleryData}) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    let [ data_url ] = imageList
    galleryData["dataImg"].value = data_url
    setGalleryData(galleryData);
  };

  let { dataImg } = galleryData

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url" >
      {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps, }) => (
        // write your building UI
        <>
          <div className="form-group col" >
            <div className="form-group w-100 d-flex justify-content-center">
              <div className="upload">
                <div className="upload-files">
                  <div className="body" id="drop" >
                    <div className='overDrop'
                      style={isDragging && !dataImg["value"] ? { outlineColor: 'black' } : dataImg["value"] ? { outline: 'none' } : undefined}
                      onClick={!dataImg["value"] ? onImageUpload : undefined}
                      {...dragProps} 
                      >

                      {dataImg["value"] &&
                        <div key={0} className="image-item" style={{backgroundImage:`url(${dataImg["value"]["data_url"]})`}}>
                        </div>
                      }

                    </div>
                    {!dataImg["value"] && <p className="pointer-none">
                      <b>Drag and drop</b> files here <br /> or{" "}
                      <Link onClick={onImageUpload} to="" id="triggerFile">
                        browse
                      </Link>{" "}
                      to begin the upload
                    </p>}

                    {dataImg["value"] &&
                    <div className='btn-even pt-4 row'>
                      <button className='btn-remove' onClick={() => onImageRemove(0)}><i className="fas fa-times"></i></button>
                      <button className='btn-update' onClick={() => onImageUpdate(0)}><i className="fas fa-upload"></i></button>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </ImageUploading>

  );
}

