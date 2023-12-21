// src/components/AvisoLegalAccordion.js
// src/components/AvisoLegalAccordion.js
import React from 'react';
import { Collapse, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const AvisoLegalAccordion = ({ preguntas }) => {
  return (
    <div className="accordion">
      <Collapse accordion>
        {preguntas.map((item, index) => (
          <Panel header={item.pregunta} key={index}>
            <Card>
              <p>
                {item.respuesta}{' '}
                <Link to={`/detalle-documento/${index}`}>Leer más</Link>
              </p>
            </Card>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default AvisoLegalAccordion;
