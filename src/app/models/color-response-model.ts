import { Color } from "./color";
import { ResponseModel } from "./response-model";

export interface ColorResponseModel extends ResponseModel{
    data:Color[]
}
