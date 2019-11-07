import React from "react";

function Heading(props: any): any {
    return (<h1>Hello { props.name.toUpperCase() }</h1>);
}

export default Heading;
