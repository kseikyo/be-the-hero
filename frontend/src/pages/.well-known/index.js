import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function Wellknown() {
  const [text, setText] = useState('');
  useEffect(() => {
    api.get('/.well-known', {
    }).then(response => {
      setText(response.data);
    })
  });
  
  return (
    <div>
      {text}
    </div>
  );
}
