'use client';

import { useEffect } from 'react';

export function CVRedirect() {
  useEffect(() => {
    // Redirect to the PDF
    window.location.href = '/pdf/cv.pdf';
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to CV...</p>
    </div>
  );
}
