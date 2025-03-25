import { Link } from "react-router-dom";
import "./Home.css";

export default function Home3(){

    return(
<div class="Home3 column_items_center">
    <div class="column_items_center">
    <h2>Nos points forts</h2>
    <h2under></h2under></div>

    <div class="block">
        <content>Nous avons de l’ambition pour nos clients ; nous personnalisons nos préparations pour que nos
clients réussissent ; nous trouvons avec vous les arguments pour légitimer des projets professionnels
convaincants ; nous développons la confiance en soi de nos clients ; enfin, nous enrichissons
continuellement nos connaissances sur le métier en capitalisant sur les retours d’expérience</content>
    </div>

    <div class="line_between" id="offre_content_telephone">

<div class="column_items_center">
  <h4title><blue>+ 600</blue></h4title>
  <h2under2></h2under2>
  <br/>
  <h2title>Entretiens depuis
2007</h2title>
</div>
<div class="column_items_center">
  <h4title><blue>98 %</blue></h4title>
  <h2under2></h2under2>
  <br/>
  <h2title>de taux de réussite moyen</h2title>
</div>
<div class="column_items_center">
  <h4title><blue>100 %</blue></h4title>
  <h2under2></h2under2>
  <br/>
  <h2title>de taux de satisfaction</h2title>
</div>


</div>

<Link to="/rendez-vous" onClick={() => window.scrollTo(0,10)}>
                <button id='bouton' >En savoir +</button>
                
                
                </Link>

</div>
    );


}