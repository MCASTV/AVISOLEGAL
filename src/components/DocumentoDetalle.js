import React from 'react';
import './DocumentoDetalle.css';

const DocumentoDetalle = () => {
  const preguntasRespuestasDetalladas = [
    {
      pregunta: '¿Cuál es nuestro compromiso de privacidad?',
      respuesta:
        'Nuestro compromiso es proteger la información personal de nuestros usuarios mediante las siguientes acciones y principios:',
      detalles: [
        'Principio 1: Recopilación Limitada',
        'Principio 2: Uso Legítimo',
        'Principio 3: Seguridad de Datos',
        // Agrega más detalles según sea necesario
      ],
      contenido: `
        En Eureka Sigma, consideramos que la privacidad de nuestros usuarios es de suma importancia.
        Nos comprometemos a recopilar la información de manera limitada y legítima, siguiendo principios
        éticos y respetando la seguridad de los datos.
        `,
    },
    {
      pregunta: '¿Cómo manejamos la información del usuario?',
      respuesta:
        'Manejamos la información del usuario de manera segura y confidencial. Utilizamos tecnologías...',
      detalles: [
        'Proceso de Encriptación',
        'Políticas de Acceso Restringido',
        // Agrega más detalles según sea necesario
      ],
      contenido: `
        En Eureka Sigma, implementamos rigurosas medidas para garantizar la seguridad y confidencialidad
        de la información del usuario. Utilizamos tecnologías de encriptación avanzada y aplicamos políticas
        de acceso restringido para proteger la privacidad de nuestros usuarios.
        `,
    },
    {
        pregunta: '¿Qué medidas tomamos para garantizar la seguridad de la información?',
        respuesta:
          'Implementamos medidas de seguridad, como encriptación y protocolos de seguridad avanzados, para...',
        detalles: [
          'Encriptación Avanzada',
          'Protocolos de Seguridad',
          'Monitoreo Continuo',
          'Actualizaciones Regulares',
        ],
        contenido: `
          En Eureka Sigma, la seguridad de la información es una prioridad fundamental.
          Para garantizar la protección de los datos, implementamos medidas de seguridad avanzadas,
          incluida la encriptación de datos, protocolos de seguridad robustos, monitoreo continuo
          y actualizaciones regulares para mantenernos a la vanguardia de las amenazas potenciales.
          `,
      },
      {
        pregunta: '¿Cómo respondemos a incidentes de seguridad de datos?',
        respuesta:
          'En caso de incidentes de seguridad de datos, tenemos un protocolo establecido para investigar...',
        detalles: [
          'Protocolo de Respuesta a Incidentes',
          'Investigación Detallada',
          'Comunicación Transparente',
          'Medidas Correctivas',
        ],
        contenido: `
          En Eureka Sigma, nos tomamos muy en serio cualquier incidente de seguridad de datos.
          Contamos con un protocolo de respuesta a incidentes que incluye una investigación detallada,
          una comunicación transparente con los afectados y la implementación de medidas correctivas
          para prevenir futuros incidentes.
          `,
      },
      {
        pregunta: '¿Cómo acceder o actualizar la información personal?',
        respuesta:
          'Los usuarios pueden acceder o actualizar su información personal iniciando sesión en sus cuentas...',
        detalles: [
          'Acceso a la Información Personal',
          'Actualización de Datos',
          'Protección de Privacidad',
        ],
        contenido: `
          En Eureka Sigma, valoramos la transparencia y la autonomía del usuario respecto a su información personal.
          Los usuarios pueden acceder fácilmente a su información personal iniciando sesión en sus cuentas y
          tienen la capacidad de actualizar sus datos para garantizar su precisión y proteger su privacidad.
          `,
      },
  ];

  return (
    <div className="documento-detalle-container">
      <h1 align="center">NUESTRO COMPROMISO</h1>
            <p><br></br></p>
    {preguntasRespuestasDetalladas.map((item, index) => (
      <div key={index} className="card pregunta-detallada">
        <div className="card-body">
          <h3 className="card-title">{item.pregunta}</h3>
          <p className="card-text">{item.respuesta}</p>
          <p className="card-text">{item.contenido}</p>
          <ul className="list-group list-group-flush">
            {item.detalles.map((detalle, detalleIndex) => (
              <li key={detalleIndex} className="list-group-item">{detalle}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);
};

export default DocumentoDetalle;
