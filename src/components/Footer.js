/**
 *  composant qui fait appel au bas de chaque page (footer)
 * @param {img} image
 * @returns 
 */
export function Footer({footerlogo}){

    return(
        <footer className="footer">
            <img src = {footerlogo} className ="footerLogo"/>
            <p className="footerText">
            © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )


}