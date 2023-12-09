import React from "react";
import './styles.css';

export default function HomePage() {
  return (
    <div className="main">
      <div className="div-button">
        <Button variant="shadow" type="button" className="btn-main">Gaming Room</Button>
        <Button variant="shadow" type="button" className="btn-main">Cinema Maison</Button>
        <Button variant="shadow" type="button" className="btn-main">Matériel de fête</Button>
    </div>
    </div>
  );
}
