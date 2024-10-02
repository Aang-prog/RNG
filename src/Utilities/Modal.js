import React, {useState, useEffect} from 'react';
import "./Modal.css";
import "./../Assets/fonts.css";
import data from "./Data.js";





const Modal = ({ open, onClose }) => {
    const [randomItem, setRandomItem] = useState(null);

    useEffect(() => {
        if (open) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomItem(data[randomIndex]);
        }
    }, [open]);

    if (!open || !randomItem) return null;


    return (
        <div className="modal">
            <div className="modal-content">
                
                <h3 className='ItemName'>{randomItem.title}</h3>
                <p className='Rarity'>{randomItem.description}</p>
                <p className='Description'>{randomItem.effect}</p>
            </div>
        </div>

    );
}

export default Modal;