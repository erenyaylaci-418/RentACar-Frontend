import { Cardto } from "./cardto";
import { ResponseModel } from "./response-model";

export interface CarDtoResponseModel extends ResponseModel{
    data:Cardto[]
}
