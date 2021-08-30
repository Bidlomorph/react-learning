import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

const styles = {
  ul: {
    listStyle: 'none',
  }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
          { props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} index={index}/>
          } )}
        </ul>
    )
}

TodoList.propTypes = {
  todos: PropTypes.array(PropTypes.object).isRequired
}

export default TodoList
