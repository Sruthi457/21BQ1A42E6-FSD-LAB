import React from "react"; // Fixed import statement

export default function Button(props) {
    let { action, title } = props;
    return <button onClick={action}>{title}</button>;
}
