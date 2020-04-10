import React from 'react'
import { addTodo, removeTodo, toggleTodo } from '../../actions'
import { connect } from "react-redux";
import styles from "./style.module.scss";
import TodoItem from "../TodoItem"

const mapStateToProps = state => state

const mapDispatchToProps = {
    addTodo,
    removeTodo,
    toggleTodo
}

function TodoList(props) {

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
                        />)
                }
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)