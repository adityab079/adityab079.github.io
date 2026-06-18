import React from 'react';
import { data } from '../data';

export default function Certifications() {
  const chunks = [
    data.certifications.slice(0, 4),
    data.certifications.slice(4, 9),
    data.certifications.slice(9),
  ];

  const animations = ['slideInLeft', 'slideInRight', 'slideInLeft'];

  return (
    <>
      <div id="certifications" className="section">
        <div className="section-heading text-center wow fadeIn">
          &lt; Certifications /&gt;
        </div>
        <div className="font-1-75rem text-center">
          {chunks.map((chunk, idx) => (
            <div key={idx} className={`link-cont wow ${animations[idx]}`}>
              <div className="link-wrapper">
                {idx === 0 && <br />}
                {chunk.map((cert, certIdx) => (
                  <React.Fragment key={certIdx}>
                    <a
                      className="link hover-6"
                      href={cert.url}
                      target="_blank"
                      style={
                        idx === 1 && (certIdx === 0 || certIdx === 3)
                          ? { paddingTop: '15px' }
                          : idx === 2 && certIdx === 0
                          ? { paddingTop: '15px' }
                          : {}
                      }
                    >
                      {cert.name}
                    </a>
                    {certIdx < chunk.length - 1 && ' • '}
                  </React.Fragment>
                ))}
                {idx === 2 && <br />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
