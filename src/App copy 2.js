import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App (props) {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <div>
      {
        (dataUri)
          ? <ImagePreview dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
    </div>
  );
}


export default App;