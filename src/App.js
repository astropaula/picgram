import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImage, setSelectedImg] = React.useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
