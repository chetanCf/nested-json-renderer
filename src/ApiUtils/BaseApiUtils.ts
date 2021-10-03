export class BaseApiUtils {
    /**
     * post
     */
    public post(url: string, requestInfo:RequestInit) {
        return new Promise((resolve, reject)=>{
            fetch(url, requestInfo)
            .then(res=>res.json())
            .then(json=>resolve(json))
            .catch(()=>reject({msg:"Unexpected Error"})); // in some cases(400 bad request) the Api was returning non JSON(plain text error)
        })
        
    }
}