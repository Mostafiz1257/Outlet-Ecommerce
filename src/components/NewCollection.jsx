import Card from "./Card";
import SectionTitle from "./SectionTitle";

import allData from '../../public/fakeData.json'
const NewCollection = () => {
    return (
        <div>
            <SectionTitle heading={"New collection arrived"} subHeading={"Order now"}></SectionTitle>
            <div className=" grid md:grid-cols-3  gap-3">
                {
                    allData.filter(item => item.condition === "new").map(item => (
                        <Card key={item.name} item={item}></Card> 
                    ))
                }
            </div>
        </div>
    );
};

export default NewCollection;