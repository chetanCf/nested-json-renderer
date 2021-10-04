import React, { useState } from "react";
import { ALLOWED_MAX_VAL_FOR_CHILDREN_LENGTH, ALLOWED_MAX_VAL_FOR_NODE_DEPTH } from "../../Constants/AppConfig";
import "./dataGeneratorForm.css";

interface DataGeneratorFormProps {
    genrateData(nodeDepth: number, childrenLength: number): void;
}

export const DataGeneratorForm: React.FC<DataGeneratorFormProps> = ({ genrateData }) => {
    const [validationErrors, setValidationError] = useState({ nodeDepth: "", childrenLength: "" });
    const [nodeDepth, setNodeDepth] = useState("3");
    const [childrenLength, setChildrenLength] = useState("3");

    const isDataValid = (): boolean => {
        setValidationError({ nodeDepth: "", childrenLength: "" });
        const nodeDepthInt = parseInt(nodeDepth, 10);
        const childrenLengthInt = parseInt(childrenLength, 10);
        if (nodeDepthInt <= 0 || nodeDepthInt > ALLOWED_MAX_VAL_FOR_NODE_DEPTH) {
            setValidationError({
                ...validationErrors,
                nodeDepth: `Node depth must be an integer between 0 - ${ALLOWED_MAX_VAL_FOR_NODE_DEPTH}.`
            });
            return false;
        } else if (childrenLengthInt <= 0 || childrenLengthInt > ALLOWED_MAX_VAL_FOR_NODE_DEPTH) {
            setValidationError({
                ...validationErrors,
                childrenLength: `Number Of Siblings must be an integer between 0 - ${ALLOWED_MAX_VAL_FOR_CHILDREN_LENGTH}.`
            });
            return false;
        }
        return true
    }

    const populateRandomData = () => {
        if (isDataValid()) {
            genrateData(parseInt(nodeDepth), parseInt(childrenLength));
        }
    }

    const handleNodeDepthInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNodeDepth(event.currentTarget.value);

    }

    const handleChildrenLengthInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChildrenLength(event.currentTarget.value);
    }

    return (
        <div className="form-container">
            <div className="form-group">
                <div className="input-label">Depth Of node</div>
                <input className={`num-input${validationErrors.nodeDepth ? "-error" : ""}`} type="number" placeholder="Depth Of node" name="nodeDepth" value={nodeDepth}
                    onChange={handleNodeDepthInputChange} />
                <div className="error-msg">{validationErrors.nodeDepth}</div>
            </div>
            <div className="form-group">
                <div className="input-label">Number Of Siblings</div>
                <input className={`num-input${validationErrors.childrenLength ? "-error" : ""}`} type="number" placeholder="Number Of Siblings" name="childrenLength" value={childrenLength}
                    onChange={handleChildrenLengthInputChange} />
                <div className="error-msg">{validationErrors.childrenLength}</div>
            </div>
            <button onClick={populateRandomData}>Generate Data</button>
        </div>
    )
}