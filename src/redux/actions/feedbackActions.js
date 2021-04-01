import { SEARCH_USER_API, USER_DATA_API } from "../../config/urls"
import { apiGet, apiPost } from "../../utils/utils"

export function feedbackData(data) {
    return apiPost(USER_DATA_API, data)
}


export function seacrhCustomer(query) {
    return apiGet(`${SEARCH_USER_API}${query}`);
}


// {"searchType": "LEADERBOARD", "limit":"10", "skip":"0"}