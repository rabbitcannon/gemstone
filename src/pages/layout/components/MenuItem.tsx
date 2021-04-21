import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons";

interface IProps {
    text: string
}

class MenuItem extends Component<IProps> {
    render() {
        return (
            <a href="#"
               className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <FontAwesomeIcon icon={faTachometerAlt} size="lg" /> <span className="ml-4">{this.props.text}</span>
            </a>
        );
    }
}

export default MenuItem;