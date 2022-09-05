import React from 'react';
import { Label } from '@adminjs/design-system';
import './css/list-images.css';

export default function ListImages(props) {
  const { params } = props.record;
  console.log(params);
  console.log(props);
  const bucket = params['images.bucket.0'];
  const key = params['images.key.0'];
  const image = window.location.origin + '/' + bucket + '/' + key;
  return (
    <div style={{ maxWidth: '5vw' }}>
      {/* show img */}
      <div style={{ width: '100%', height: '100%' }}>
        <img
          src={image}
          alt='img'
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
}
