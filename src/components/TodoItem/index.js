import React from 'react'
import styles from './style.module.scss';

export default function TodoList(props) {

    return (
        <div
            onClick={props.onClick}
            className={styles.wrapper}>

            <p className={props.completed ? styles.completed : null}>
                {props.text}
            </p>
        </div>
    )

}