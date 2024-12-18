import React from 'react';
import styles from './nav.module.css'
function Nav() {
    return (
        <div className={styles.nav}> 
            <h1>Logo</h1>
            <div> 
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quote</a></li>
                    <li><a href="#">Restaurants</a></li>
                    <li><a href="#">Foods</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>
            <div>
                <button className={styles.gsbtn}>Get Started</button>
            </div>
        </div >
    )
}

export default Nav;