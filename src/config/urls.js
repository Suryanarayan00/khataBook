const API_BASE_URL = "https://api.talktier.com";


const getApiUrl = (endpoint)=>`${API_BASE_URL}${endpoint}`;

export const PHONE_API = getApiUrl('/user/v1/loginSignupOtp');
export const OPT_VERIFICATION_API = getApiUrl('/user/v1/verifyOtp');
export const USER_DATA_API = getApiUrl('/user/v1/getUserSearch');
export const SEARCH_USER_API = getApiUrl('/user/v1/getUserNearMe');
export const GET_CHAT_API = getApiUrl('/user/v1/getAllConversations');
export const COMMON_CONV_API= getApiUrl('/user/v1/getConversationMessages')


