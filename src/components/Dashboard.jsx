import React, { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    window.location.href = '/admin/resources/Project';
  });
  return <div></div>;
}
