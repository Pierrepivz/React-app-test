import React from "react";
import { Link } from 'react-router-dom';

export default function Rdvconfirm() {





    return( <div class="Rdvconfirm Offre">
            <div class="column_items_center">
             <div class="content_blue"><content>Merci pour votre confiance. Votre rendez-vous est confirmé <br />Vous allez recevoir un lien Teams de <blue>carole@winentretien.com</blue> <br/>À bientôt ☕️</content>
             
             </div>
             <Link to="./" onClick={() => window.scrollTo(0,10)}>
             <button id="bouton">retour</button>
             </Link>
             </div>
    </div>
    );
                  
}