import * as authActions from "./authActions";
import * as creditActions from "./creditActions";
import * as debitActions from "./debitActions";
import * as feedbackActions from "./feedbackActions";
import * as homeActions from "./homeActions";

export default{
    ...authActions,
    ...homeActions,
    ...creditActions,
    ...debitActions,
    ...feedbackActions,
}