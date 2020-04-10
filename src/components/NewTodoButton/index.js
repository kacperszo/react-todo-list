import React from 'react'
import styles from "./style.module.scss";

export default function AddNewItemButton (props) {

        return (
            <div
             className={styles.button}
             onClick={props.onClick}>
                <p>+</p>
            </div>
        )

}