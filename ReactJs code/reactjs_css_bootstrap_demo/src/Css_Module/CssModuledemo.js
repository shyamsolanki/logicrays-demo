import React from 'react';
import styles from './myStyles.module.css';

class CssModule extends React.Component {
    render() 
    {
        return (
            <div>
                <h1 className={styles.mystyle}>Hello</h1>
                <p className={styles.parastyle}>Good Morning</p>
            </div>
        );
    }
}
export default CssModule;