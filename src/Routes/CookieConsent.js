import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['user-consent']);
  const [isVisible, setIsVisible] = useState(!cookies['user-consent']);

  const handleAccept = () => {
    setCookie('user-consent', 'accepted', { path: '/', maxAge: 31536000 }); // 1 year
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={bannerStyle}>
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.
      </p>
      <button onClick={handleAccept}>Accepter</button>
    </div>
  );
};

const bannerStyle = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  zIndex: '1000',
};

export default CookieConsent;
