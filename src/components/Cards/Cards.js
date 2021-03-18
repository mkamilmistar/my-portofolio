import React from 'react'
import Card from './CardUI'

function Cards() {
    return (
        <div className="project">
            <Card 
                title="Patroli Karhutla"
                imgURL="gif/karhutla.gif"
                body="The Karhutla Patrol application is used for the data collection process by an integrated patrol team in the field. In the Karhutla Patrol application, there are features to fill out reports, view reports, and visualize hotspots obtained from the Sipongi application and server owned by KLHK.
                "
                small="AngularJs + Ionic 5"
                link="//github.com/AppKarhutlaNew"
            />
            <Card
                title="YukZakat"
                imgURL="gif/yukzakat.gif"
                body="This web application is equipped with an online zakat payment feature and a zakat calculator. This zakat calculator can show that the congregation's assets have not reached the limit (nishab) and when it has reached the nishab, it will show how much zakat must be paid.
                "
                small="Bootstrap (Frontend) + Laravel (Backend)"
                link="//github.com/rdamaid/yukzakat_backend"
            />
            <Card 
                title="Website Desa Pekan Kamis"
                imgURL="gif/pekankamis.gif"
                body="This website is a means of publication to provide information and an overview of the potential of Pekan Kamis, Tembilahan Hulu, Indragiri Hilir, Riau villages as well as improving services to the public to access information.
                "
                small="Wordpress"
                link="//github.com/mkamilmistar/desapekankamis"
            />
            <Card
                title="SIMAS ASRAMA SCB"
                imgURL="gif/simas.gif"
                body="The Management Information System for SMP Cendekia Baznas is the management of dormitory activities, including memorization records, good and bad notes, points of violation by SCB students.
                "
                small="Bootstrap (Frontend) + Laravel (Backend)"
                link="//github.com/mkamilmistar/Simak-Asrama"
            />
        </div>
    )
}

export default Cards
