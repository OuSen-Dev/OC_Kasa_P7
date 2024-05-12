import React from "react";
import '../style/pages/NotFound.css';
import error from '../assets/error.png';
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <div className="error">
            <div>
                <img src={error} alt="erreur 404" />
            </div>
            <p className="errorText">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to={`/`} className="errorLink">
                Retour sur la page d'acceuil
            </Link>
        </div>
    );
}

export default NotFound