import React from "react";
import Card from "./CardUI";

function Cards() {
    let imgURL = [
        "https://lh3.googleusercontent.com/pw/ACtC-3dxlFWYdixO3X7y2T78jZPIw_bTcV5XXEkDh4m3DqPg5ULRRykpmBnx2EOBL-xq-7a1Yha8Rq5AD_v3aI4CWDCBXqIlbHc_crHKnBkyn80glLr7bUbC--wgMf7eQrVNW0vN48buqWLYro-31NaB1sED=w1187-h667-no",
        "https://lh3.googleusercontent.com/pw/ACtC-3caZNIaRnD1i3eLqLrFFufBnc-swshog1UlFeuN_DpOx6zeR7so8G4dAwWAfJ8w7tuOSjuuZpat6OZWGmMWSkEl5AAi1QO6QlIcAhyaddb2NJOp_i2gUflkpAOascO836F3BlNvFz1VEszu40cNv68m=w1187-h667-no",
        "https://lh3.googleusercontent.com/pw/ACtC-3cItSthCFq8S1jWZEwxktewFGk3Rdf9tYmZRduknh3UXLpUCaPE5Otl94v3-Z3bcbkxn4SKcRObY73OPrXFQ-tUPlWhjRAa3Rf876lQ2mJynDr3dL95LOb4ALPPsckw3KsyS9ur4joQZDTjg4UlaMuX=w1187-h667-no",
    ];
    return (
        <div className="project">
            <Card
                title="Forest and Land Fire Patrol"
                imgURL="images/karhutla.gif"
                body="The Karhutla Patrol mobile application is used for the data collection process by an 
                integrated patrol team in the field. In the Karhutla Patrol application, there are 
                features to fill out reports, view reports, and visualize hotspots obtained from the Sipongi 
                application and server owned by Kementerian Lingkungan Hidup dan Kehutanan (KLHK).
                "
                small="AngularJs + Ionic 5"
                link="//play.google.com/store/apps/details?id=com.karhutla_ipb.myapp"
            />
            <Card
                title="YukZakat"
                imgURL={imgURL[0]}
                body="This web application is equipped with an online zakat payment feature and a zakat calculator. This zakat calculator can show that the congregation's assets have not reached the limit (nishab) and when it has reached the nishab, it will show how much zakat must be paid.
                "
                small="Bootstrap (Frontend) + Laravel (Backend)"
                link="//github.com/rdamaid/yukzakat_backend"
            />
            <Card
                title="Pekan Kamis Village Website"
                imgURL={imgURL[1]}
                body="This website is a means of publication to provide information and an overview of the potential of Pekan Kamis, Tembilahan Hulu, Indragiri Hilir, Riau villages as well as improving services to the public to access information.
                "
                small="Wordpress"
                link="//github.com/mkamilmistar/desapekankamis"
            />
            <Card
                title="SIMAS ASRAMA SCB"
                imgURL={imgURL[2]}
                body="The Management Information System for SMP Cendekia Baznas is the management of dormitory activities, including memorization records, good and bad notes, points of violation by SCB students.
                "
                small="Bootstrap (Frontend) + Laravel (Backend)"
                link="//github.com/mkamilmistar/Simak-Asrama"
            />
        </div>
    );
}

export default Cards;
