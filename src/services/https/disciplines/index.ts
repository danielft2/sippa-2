import { api } from "@/libs/axios"
import { data } from "autoprefixer"
import { DisciplineResponse } from "./responses/disciplines.response"
import { DisciplineModel } from "@/domain/models/discipline-model"

export const DisciplineService = {
    getAll(){
        const data = api.private.get<DisciplineModel[]>('discipline').then(
            response => response.data
        )
        return data;
    }
}