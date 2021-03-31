import { USER_DATA_API } from "../../config/urls"
import { apiPost } from "../../utils/utils"

export function feedbackData(data){
    return new Promise((resolve, reject)=>{
        apiPost(USER_DATA_API ,data).then((res)=>{
            resolve(res);
        }).catch((error)=>{
            reject(error);
        })
    })
}



// {"searchType": "LEADERBOARD", "limit":"10", "skip":"0"}