import { CountriesState } from "./CountriesState";
import { NestedJson } from "./NestedJson";

export class NestedJsonGenerator implements CountriesState {

    data: Array<NestedJson> = [];

    constructor(depthOfNode: number, numberOfChildrenInEachNode: number) {
        this.data = new Array(numberOfChildrenInEachNode);
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = {
                name: "Test_Name_" + (Math.floor(Math.random() * 90000 + 10000)).toString(),
                children: []
            };
        }

        this.data.forEach(({ children }) => {
            this.generateJson(depthOfNode, numberOfChildrenInEachNode, children);
        });
    }



    private generateJson(depthOfNode: number, numberOfChildrenInEachNode: number, children: Array<NestedJson>): any {
        if (depthOfNode <= 1) {
            return children;
        } else {
            for (let i = 0; i < this.data.length; i++) {
                let d = {
                    name: "Test_Name_" + (Math.floor(Math.random() * 90000 + 10000)).toString(),
                    children: []
                };
                children.push(d);
                this.generateJson(depthOfNode - 1, numberOfChildrenInEachNode, d.children);
            }
        }
    }
}