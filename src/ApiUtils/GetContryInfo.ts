import { ApiConstants } from "../Constants/ApiCostants";
import { BaseApiUtils } from "./BaseApiUtils";

export class GetCountryInfo extends BaseApiUtils{

  private getQuery(continentCode:string){
    const templateQuery = "{\"operationName\":null,\"variables\":{},\"query\":\"{\\n  continent(code: \\\"$CNAME\\\") {\\n    name\\n    countries {\\n      name\\n    }\\n  }\\n}\\n\"}";
    return templateQuery.replace("$CNAME", continentCode);
  }

    /**
     * getCoutriesForContinents
     */
    public getCoutriesForContinents(continentName:string) {
      return this.post(ApiConstants.GET_COUNTRIES, {
        "headers": {
          "content-type": "application/json"
        },
        "body": this.getQuery(continentName),
        "method": "POST"
      });
    }
}