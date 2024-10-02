import './App.css';
import React, {useState} from 'react';
import Modal from './Utilities/Modal';
import './Utilities/SVG-Button';
import SvgButton from './Utilities/SVG-Button';



function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleButtonClick = () => {
    setOpenPopup(false); // Close the popup if it's already open
    setIsRotating(true); // Start rotation
    setTimeout(() => {
      setOpenPopup(true); // Reopen the popup after a short delay
      setIsRotating(false); // Stop rotation after animation completes
    }, 1000); // Match the duration of the CSS animation
  };
  return (

    <div className="App">
      <header className="App-header">
        <h1 className="title">Flask of Suprise</h1>
          <div className='Content'>     
            <Modal open={openPopup} onClose={() => setOpenPopup(false)} />
            <div className={`button ${isRotating ? 'rotate' : ''}`} onClick={handleButtonClick}>
              <SvgButton isRotating={isRotating} onClick={handleButtonClick} />
          </div>
          </div>
      </header>
      </div>
  );
}

export default App;
