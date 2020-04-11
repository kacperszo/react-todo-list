import React, {useState} from 'react'
import {addTodo, removeTodo, toggleTodo} from '../../actions'
import {connect} from "react-redux";
import styles from "./style.module.scss";
import TodoItem from "../TodoItem"
import NewTodoButton from "../NewTodoButton"
import NewTodoModal from "../NewTodoModal"

const mapStateToProps = state => state

const mapDispatchToProps = {
    addTodo,
    removeTodo,
    toggleTodo
}

function TodoList(props) {
    const [modalOpen, setModalOpen] = useState(false)

    const toggleModal = () => setModalOpen(!modalOpen)
    const createNewTodo = (text) => {

        if (text === '') {
            toggleModal()
        } else {
            props.addTodo(text)
            toggleModal()
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Tasks</h1>
            <div className={styles.body}>
                {
                    props.todos.map((item, i) =>
                        <TodoItem
                            key={i}
                            text={item.text}
                            completed={item.completed}
                            onClick={() => props.toggleTodo(i)}
                            onDelete={() => props.removeTodo(i)}
                        />)
                }
            </div>
            <div className={styles.buttonWrapper}>
                <NewTodoButton onClick={toggleModal}/>
            </div>
            {
                modalOpen ?
                    <div className={styles.modalWrapper}>
                        <NewTodoModal onSubmit={createNewTodo}/>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)