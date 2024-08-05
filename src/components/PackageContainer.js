import React, { useState, useEffect } from 'react';
// import React from 'react'
import PackageBox from './PackageBox'
import PackageData from "./PackageData"


const PackageContainer = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace with your actual data fetching logic
                const data = PackageData;
                setPackages(data);
                setLoading(false);
              } catch (error) {
                console.error(error);
                setError(error);
                setLoading(false);
              }
        };
        fetchData();
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }
    

      return (
        <div className="py-70 box3">
          {packages.length > 0 ? (
            packages.map((packageItem, index) => (
              <PackageBox
                key={index}
                title={packageItem.title}
                price={packageItem.price}
                features={packageItem.features}
              />
            ))
          ) : (
            <div>No packages found.</div>
          )}
        </div>
      )
}
    
export default PackageContainer