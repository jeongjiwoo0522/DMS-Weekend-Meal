import * as QueryGetStudentApplyStatusUseCase from "../../core/usecase/query-get-student-apply-status";

export class Response<T> {
    message: string;
    body: T;
}

export class QueryGetStudentApplyStatusResponse extends Response<QueryGetStudentApplyStatusUseCase.OutputValues> {}