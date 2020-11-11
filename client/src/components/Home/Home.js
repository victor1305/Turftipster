import React from 'react';

import homeImage from '../../images/horse-1394093_1920.jpg'

const Home = () => {
    return (
        <div>
            <div className = "home-image-container">
                <img className = "home-image" src = {homeImage} alt = "imagen-principal"/>
            </div>
            <article className = "home-article">
                <h2 className = "home-last-bets">Últimas Apuestas</h2>
                <p className = "home-last-bets">Aqui se carga el componente con las últimas 5 Apuestas</p>
                <h3 className = "home-join-us-h"><a className = "home-join-us-a" href = "#Telegram">Únete en Telegram</a></h3>
            </article>
        </div>
    );
}
 
export default Home;