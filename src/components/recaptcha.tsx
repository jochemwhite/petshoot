'use client'
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {env} from '@/lib/environments/client-environment';

const Recaptcha: React.FC<{ onVerify: (token: string) => void }> = ({ onVerify }) => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleVerify = (token: string | null) => {
    if (token) {
      onVerify(token);
    }
  };

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      size="invisible"
      onChange={handleVerify}
    />
  );
};

export default Recaptcha;
