import React, { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Rate from '../components/Rate';
import DropDown from '../components/DropDown';
import Slider from '../components/Slider';
import Data from '../data/Data.json';
import '../style/pages/Lodging.css';

function Lodging() {
    const params = useParams();
    
    const navigate = useNavigate();
    useEffect(() => {
        let rental = Data.find((rental) => params.id === rental.id);
        if (!rental) {
            navigate('/notfound');
        }
    });

    return (
        <div id="rental">
           <div className="rental">
              {Data.filter((rental) => rental.id === params.id).map(
                 (rental, index) => (
                    <div key={rental.id - index} className="rental__boxes">
                       <div className="rental__slider">
                          <Slider data={rental.pictures} />
                       </div>
                       <div className="rental__box">
                          <div className="rental__left">
                             <h2>{rental.title}</h2>
                             <p className="rental__object">{rental.location}</p>
                             <div className="tags">
                                {rental.tags.map((tag, key) => (
                                   <div className="tag" key={key}>
                                      {tag}
                                   </div>
                                ))}
                             </div>
                          </div>
                          <div className="rental__right">
                             <div className="rental__name">
                                <p>{rental.host.name}</p>
                                <img
                                   className="rental__host"
                                   src={rental.host.picture}
                                   alt="propriétaire du logement"
                                />
                             </div>
                             <div className="rating">
                                <Rate rate={rental.rating} />
                             </div>
                          </div>
                       </div>
                       <div className="drop">
                          <div className="drop__down">
                             <DropDown
                                title={"Description"}
                                info={rental.description}
                             />
                          </div>
                          <div className="drop__down">
                             <DropDown
                                title={"Équipements"}S
                                txtArray={rental.equipments}
                             />
                          </div>
                       </div>
                    </div>
                 )
              )}
           </div>
        </div>
     );
}

export default Lodging;

