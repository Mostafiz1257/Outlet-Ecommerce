import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';

const Man = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://mostafiz1257.github.io/mockjson/fakeData.json');
                const jsonData = await response.json();
                setData(jsonData.filter(item => item.gender === "male"));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
    return (
        <div>
            {/* <SectionTitle heading={"New collection arrived"} subHeading={"Order now"}></SectionTitle> */}
            <div className="grid md:grid-cols-3 gap-3">
                {data.map(item => (
                    <Card key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Man;
