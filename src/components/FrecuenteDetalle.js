import React from 'react';
import './FrecuenteDetalle.css';

const FrecuenteDetalle = () => {
    const preguntasRespuestasDetalladas = [
        {
            pregunta: '¿Qué derechos tienen los usuarios sobre sus datos?',
            respuesta:
              'Los usuarios tienen el derecho de acceder, corregir, eliminar o transferir sus datos personales. Este compromiso se basa en principios fundamentales de privacidad y empoderamiento del usuario. Al proporcionar a los usuarios el control sobre su información personal, buscamos asegurar que cada individuo pueda gestionar y decidir cómo se utilizan y procesan sus datos.',
          },
          {
            pregunta: '¿Cómo protegemos la seguridad de la información?',
            respuesta:
              'Implementamos medidas de seguridad exhaustivas para salvaguardar la integridad y confidencialidad de la información. La encriptación, en particular, se utiliza para codificar los datos, haciendo que sean ilegibles para cualquier entidad no autorizada. Además, seguimos protocolos de seguridad avanzados que abarcan desde el monitoreo continuo hasta actualizaciones regulares, asegurándonos de estar a la vanguardia de las amenazas potenciales',
          },
          {
            pregunta: '¿Cómo puedo ejercer mis derechos de privacidad?',
            respuesta:
              'Para ejercer tus derechos de privacidad, simplemente ponte en contacto con nuestro equipo de soporte. Estamos aquí para ayudarte y facilitar cualquier solicitud relacionada con tu información personal. Creemos en la transparencia y la colaboración, por lo que nos esforzamos por brindar a los usuarios un proceso sencillo y eficiente para el ejercicio de sus derechos de privacidad',
          },
        
    ];

    return (
        <div className="frecuente-detalle-container">
            <h1 align="center">PREGUNTAS FRECUENTES</h1>
            <p><br></br></p>
      {preguntasRespuestasDetalladas.map((item, index) => (
        <div className="frecuente-detalle" key={index}>
          <h3>{item.pregunta}</h3>
          <p>{item.respuesta}</p>
          {item.detalles && (
            <ul>
              {item.detalles.map((detalle, detalleIndex) => (
                <li key={detalleIndex}>{detalle}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
  


export default FrecuenteDetalle;