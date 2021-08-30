import React from "react";
import PropTypes from "prop-types";

function TodoItem({todo, index}) {
    return (
        <li>{index}: {todo.title}</li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem
