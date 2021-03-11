import { Brand } from "./brand";
import { ResponseModel } from "./response-model";

export interface BrandResponseModel extends ResponseModel{
    data:Brand[]
}
