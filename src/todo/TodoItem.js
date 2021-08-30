import React from "react";
import PropTypes from "prop-types";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    span: {
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}) {
    return (
        <li style={styles.li}>
        <span style={styles.span}>
            <input type="checkbox" style={styles.input} onChange={() => {
                onChange(todo.id)
            }}/>
            <p>{index}: {todo.title}</p>
        </span>
        <button className={'rm'}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
