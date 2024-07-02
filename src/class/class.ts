import {  HttpStatus } from "@nestjs/common";

export class DosenResponse {
    status: HttpStatus;
    message: string;
    data?: any;
    total?: number;
}