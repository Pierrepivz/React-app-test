import React from "react";
import { Link } from 'react-router-dom';

export default function Contactconfirm() {





    return( <div class="Rdvconfirm Offre">
            <div class="column_items_center">
             <div class="content_blue"><content>Votre message a bien été pris en compte ! <br />À bientôt ☕️</content>
             
             </div>
             <Link to="./" onClick={() => window.scrollTo(0,10)}>
             <button id="bouton">Retour</button>
             </Link>
             </div>
    </div>
    )
                  
}