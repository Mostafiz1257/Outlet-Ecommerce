import React from 'react';
import SectionTitle from './SectionTitle';
import allData from '../../public/fakeData.json'
import Card from './Card';
const Other = () => {
    return (
        <div>
        {/* <SectionTitle heading={"New collection arrived"} subHeading={"Order now"}></SectionTitle> */}
        <div className=" grid md:grid-cols-3  gap-3">
            {
                allData.filter(item => item.gender === "unisex").map(item => (
                    <Card key={item.name} item={item}></Card> 
                ))
            }
        </div>
    </div>
    );
};

export default Other;