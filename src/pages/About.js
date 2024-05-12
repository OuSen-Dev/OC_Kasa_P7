import React from "react";
import AboutImgD from '../assets/about.png';
import AboutImgM from '../assets/AboutMobile.png';
import DropDown from "../components/DropDown";
import '../style/pages/About.css';

function About() {
    const contents = [
        {
            id: 1,
            value: "Fiabilité",
            text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes.",
        },
        {
            id: 2,
            value: "Respect",
            text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        },
        {
            id: 3,
            value: "Service",
            text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            id: 4,
            value: "Sécurité",
            text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];
    return (
        <div className="about">
            <section className="about__section">
                <img
                    className="about__img"
                    src={AboutImgD}
                    alt="paysage de montagne"
                />
                <img
                    className="about__imgM"
                    src={AboutImgM}
                    alt="paysage de montagne"
                />
            </section>
            <div className="dropdown">
                {contents.map((content) => (
                    <div className="dropdown__content" key={content.id}>
                        <DropDown info={content.text} title={content.value} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About
