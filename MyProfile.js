import React from 'react'
import './MyProfile.css';
import pic2 from './pic2.jpg';

function MyProfile() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="picture-wrapper">
                        <img src={pic2} alt="pic" />
                    </div>
                    <div className="description">
                            <h1>Velkommen!</h1>
                            <p>Seriøs og loyal ung mand, der ligger sved og kræfter i sit arbejde og stræber efter at levere det bedste af det bedste. Det benhårde gå-på-mod-drive til at få sat noget i gang og følge dem helt til dørs samt til punkt og prikke har altid ligget i blodet. Derudover bliver struktur, stabilitet og arbejdsplanlægning værdsat højt.</p>
                            <p>Jeg er den fødte flynørd så i min fritid vil man oftest finde mig bag min computerbaserede flysimulator, 
                                hvor jeg krydser de 7 forskellige verdensdele - eller er i gang med at tracke fly. 
                                 Herudover skriver jeg gerne lange romaner, når der findes tid til det, som kan handle om alt mellem himmel og jord.
                                  Lige fra historien om den første flyvning til en ungdomsroman blandet med samfundskritiske emner og egne erindringer. 
                                  Jeg har ligeledes selvudgivet to romaner i hhv. 2015 & 2017, mens næste mål er om at blive antaget på et forlag en skønne dag. 
                                  Deruover elsker jeg at tilbringe tid med familien samt bidrage til igangværende debatter i samfundet. 
                                  Man kan nok godt kalde mig en stræber, og jeg har store ambationer til mig selv og mit arbejde.</p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default MyProfile
