import React, { useState } from "react";
import "./Accordion.css";
import caret from "../../assets/icons/caret.png";

interface AccordionProps {
    title: string;
    code?: string;
    handleClick(isOpen: boolean): void
}


export const Accordion: React.FC<AccordionProps> = ({ children, title, handleClick, code }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = (event: React.MouseEvent) => {
        event.stopPropagation();
        handleClick(!isOpen);
        setIsOpen(!isOpen);

    }

    return (<div className={`accordionContainer${(isOpen && children) ? " open" : ""}`} onClick={toggleAccordion}>
        <div className="accordionHeader">
                <img src={caret} className="caret" alt="close-accordion" />
            <span>{title}</span>
        </div>
        {isOpen &&
            <>{children}</>
        }
    </div>)
}