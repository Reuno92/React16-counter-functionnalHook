import React, {FC} from "react";
import {Heading} from "../models/heading";

const HeadingComponent: FC<Heading> = (props: any) => {

    function label(props: any): string {
        const OUTPUT = props.name.toUpperCase();
        return `Hello ${OUTPUT}`;
    }

    return (<h1>{ label(props) }</h1>)
};

export default HeadingComponent;
