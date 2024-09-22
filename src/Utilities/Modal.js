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

        // Function to wrap specific words in a span with a class
        const highlightRarity = (rarity) => {
            const rarityClasses = {
                'Common': 'common',
                'Uncommon': 'uncommon',
                'Rare': 'rare'
            };
            return <span className={rarityClasses[rarity]}>{rarity}</span>;
        };

    return (
        <div className="modal">
            <div className="modal-content">
                
                <h3 className='ItemName'>{randomItem.title}</h3>
                <p className='Rarity'>{highlightRarity(randomItem.rarity)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{randomItem.attunement}</p>
                <p className='Description'>{randomItem.description}</p>
            </div>
        </div>

    );
}

export default Modal;