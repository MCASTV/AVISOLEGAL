// src/components/AvisoLegalFAQScroll.js
import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const AvisoLegalFAQScroll = ({ preguntas }) => {
  return (
    <div className="faq-scroll">
      {preguntas.map((item, index) => (
        <Card key={index}>
          <h4>{item.pregunta}</h4>
          <p>{item.respuesta}</p>
          <Link to={`/detalle-frecuente/${index}`}>Leer más</Link>
        </Card>
      ))}
    </div>
  );
};

export default AvisoLegalFAQScroll;
