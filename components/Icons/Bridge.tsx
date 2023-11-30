import React from 'react';
import Image from 'next/image';
import HDLogo from '../../assets/hdlogo.png'; // Adjust the path based on your folder structure

export default function Bridge() {
  return (
    <div>
      {/* Your SVG */}
      <Image src={HDLogo} alt="HD Logo" width={300} height={300}  />
    </div>
  );
}
