export default abstract class UseCase<I extends InputValues, O extends OutputValues> {
    abstract excute(input: I): O;
}

export interface InputValues {}
export interface OutputValues {}