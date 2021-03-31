import * as authActions from "./authActions";
import * as creditActions from "./creditActions";
import * as debitActions from "./debitActions";
import * as feedbackActions from "./feedbackActions";




export default{
    ...authActions,
    ...creditActions,
    ...debitActions,
    ...feedbackActions,
}