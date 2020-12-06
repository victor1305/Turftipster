import React from 'react';

import boxImage from '../../images/Cuadra.jpg'

const AboutUs = () => {
    return (  
        <article className = "about-us-container">
            <h2 className = "about-us-title">¿Quiénes Somos?</h2>
            <p className = "about-us-p">Turftipster nace en Enero del año 2016 con la ilusión de acercar el mundo de las carreras de caballos a la mayor gente posible. Para ello, valiéndonos de toda la experiencia adquirida durante tantos años de afición, creamos un grupo en el que  hemos tratado de combinar nuestra pasión por el turf con apuestas que siempre han tenido como principal premisa buscar la mayor rentabilidad con el mínimo riesgo posible. Y es que para nosotros no hay nada mas importante que cuidar el bank de la gente que nos sigue, es una responsabilidad que entendemos debe ser la premisa de cualquier pronosticador.</p>
            <p className = "about-us-p">Gracias a este sistema, en este margen de tiempo hemos conseguido números que nos hacen sentir muy orgullosos. Mas de 650 unidades ganadas que cobran especial importancia si tenemos en cuenta que se han conseguido con un yield medio del 25%. Y es que no es lo mismo utilizar 500€ para cobrar 750€ que utilizar 1250€ para cobrar 1500€.</p>
            <p className = "about-us-p">Aparte de nuestros resultados, si hay algo que nos hace sentir especial ilusión, es ver como la gente que nos sigue ha ido aficionándose a este trepidante mundo, y han pasado de verlo como algo meramente rentable a vivirlo como auténticos aficionados, seguir sus propios caballos, e incluso, en algunos casos, atreverse a estudiar carreras y aventurarse a dar sus propios pronósticos. Hemos conseguido hacer un grupo sólido con gente que lleva desde el día que empezamos a nuestro lado, y que se ha ido asentando con el tiempo, para terminar siendo un grupo de amigos que incluso realizan quedadas para ver una jornada de carreras juntos en el hipódromo correspondiente y comer después.</p>
            <img src = {boxImage} alt = "cuadra" className = "stats-image" />
        </article>
    );
}
 
export default AboutUs;