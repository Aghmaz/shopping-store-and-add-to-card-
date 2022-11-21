import React, { useState } from 'react'
import "./iav.css";
import Package from './api';
import PackageCard from './packageCard';
const Pack = () => {
    const [packageData, setPackageData] = useState(Package);
  return (
    <div>
     <PackageCard packageData={packageData}/>
    </div>
  )
}

export default Pack
