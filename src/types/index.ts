export interface User {
    name: string;
    email: string;
    img: string;
    password?: string;
    type: 'oauth' | 'local';
    _id?: string;
    __v?: number;
}

export type ButtonProps = {
    text: string;
    buttonStyle: number;
};