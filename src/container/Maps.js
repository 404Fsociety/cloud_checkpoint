import React from 'react';

const MapComponent = () => {
  return (
      <div style={{display:"flex",justifyContent:"center",background:"rgb(11,8,7)" }}>
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=26%20obeidallah%20el,%20Rue%20Mohamed%20Salah%20Mehdi,%20Ariana&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: '910px', height: '550px' }}
        ></iframe>
        <style>{`.mapouter{position:relative;height:400px;width:470px;background:#fff;}`}</style>
        <a
          href="https://www.eireportingonline.com/ircc-login/"
          style={{
            color: '#fff !important',
            position: 'absolute !important',
            top: '0 !important',
            zIndex: '0 !important',
          }}
        >
        </a>
        <style>{`.gmap_canvas{overflow:hidden;height:400px;width:470px}.gmap_canvas iframe{position:relative;z-index:2}`}</style>
      </div>
  );
};

export default MapComponent;
