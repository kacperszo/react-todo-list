import React from 'react'
import styles from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export default function TodoItem(props) {

    return (
        <div

            className={styles.wrapper}>
            <div
                onClick={props.onClick}
                className={styles.leftWrapper}
            >
                <p className={props.completed ? styles.completed : null}>
                    {props.text}
                </p>
            </div>
            <div
                className={styles.rightWrapper}
                onClick={props.onDelete}
            >
                <FontAwesomeIcon color={"#9f0000"} icon={faTrash}/>
            </div>
        </div>
    )

}