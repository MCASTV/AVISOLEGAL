// src/components/AvisoLegal.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AvisoLegalAccordion from './AvisoLegalAccordion';
import AvisoLegalFAQScroll from './AvisoLegalFAQScroll';
import { Card, Collapse } from 'antd';
import './AvisoLegal.css';

const { Panel } = Collapse;

const AvisoLegal = () => {
  // Preguntas principales
  const [preguntasPrincipales] = useState([
    {
       pregunta: '¿Cuál es nuestro compromiso de privacidad?',
    respuesta: 'Nuestro compromiso es proteger la información personal de nuestros usuarios mediante las siguientes acciones y principios:',
  

      },
      {
        pregunta: '¿Cómo manejamos la información del usuario?',
        respuesta:
          'Manejamos la información del usuario de manera segura y confidencial. Utilizamos tecnologías...',
      },
      {
        pregunta: '¿Qué medidas tomamos para garantizar la seguridad de la información?',
        respuesta:
          'Implementamos medidas de seguridad, como encriptación y protocolos de seguridad avanzados, para...',
      },
      {
        pregunta: '¿Cómo respondemos a incidentes de seguridad de datos?',
        respuesta:
          'En caso de incidentes de seguridad de datos, tenemos un protocolo establecido para investigar...',
      },
      {
        pregunta: '¿Cómo acceder o actualizar la información personal?',
        respuesta:
          'Los usuarios pueden acceder o actualizar su información personal iniciando sesión en sus cuentas...',
      },
  ]);

  // Preguntas frecuentes adicionales
  const [preguntasFrecuentes] = useState([
    {
      pregunta: '¿Qué derechos tienen los usuarios sobre sus datos?',
      respuesta:
        'Los usuarios tienen el derecho de acceder, corregir, eliminar o transferir sus datos personales...',
    },
    {
      pregunta: '¿Cómo protegemos la seguridad de la información?',
      respuesta:
        'Implementamos medidas de seguridad, como encriptación y protocolos de seguridad avanzados, para...',
    },
    {
      pregunta: '¿Cómo puedo ejercer mis derechos de privacidad?',
      respuesta:
        'Puedes ejercer tus derechos de privacidad poniéndote en contacto con nuestro equipo de soporte...',
    },
  ]);

  return (
    <div className="aviso-legal-container">
      {/* ... Otras secciones ... */}

      {/* Sección de Preguntas Principales */}
          <section className="aviso-legal-container">
          <h2>Nuestro Compromiso</h2>
        <AvisoLegalAccordion preguntas={preguntasPrincipales} />
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="aviso-legal-container">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <AvisoLegalFAQScroll preguntas={preguntasFrecuentes} />
          
        </div>
      </section>
    </div>
  );
};

export default AvisoLegal;
