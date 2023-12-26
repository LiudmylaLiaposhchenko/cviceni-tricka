import { useState } from 'react';
import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [color, setColor] = useState('');
  const [print, setPrint] = useState('');
  const [type, setType] = useState('');

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={type} color={color} print={print} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onSelectColor={setColor}
            onSelectPrint={setPrint}
            onSelectType={setType}
          />
        </div>
      </div>
    </div>
  );
};
