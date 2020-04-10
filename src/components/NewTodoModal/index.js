import React, { useState } from 'react'
import styles from './style.module.scss';

export default function NewTodoModal(props) {

    const [text, setText] = useState("")
    const updateTaskText = (event) => {
        setText(event.target.value)
    }


    return (
        <div className={styles.container}>
            <h2>New Task</h2>
            <textarea
                onChange={updateTaskText}
                value={text}
            ></textarea>
            <br />
            <button onClick={ () => props.onSubmit(text) }>add</button>
        </div >
    )


}