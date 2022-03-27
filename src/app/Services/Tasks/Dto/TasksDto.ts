import { StatusEnum } from "../../../helpers/status-enum";

export class TaskDto {
    id : number;
    taskName : string;
    description :string;
    status : number;
    statusLabel : string;
    startDate : string;
    endDate : string;
    completeDate : Date;
    note : string;
    projectId : number;
    projectName : string;
    assignedPerson :  number;
    persons : Array<any> = [];
}