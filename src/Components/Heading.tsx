import React, {FC} from "react";
import {HeadingModel} from "../models/heading.model";

const Heading: FC<HeadingModel> = (props: any) => {

    function label(props: any): string {
        const OUTPUT = props.name.toUpperCase();
        return `Hello ${OUTPUT}`;
    }

    return (<h1>{ label(props) }</h1>)
};

export default Heading;
