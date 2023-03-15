/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
export type ErrorType = 'Unknow' | 'String' | 'HttpErrorResponse' | 'ObjectWithMessage' | 'ObjectWithMessageObject' | 'NULL';
import { MessageBox } from './message-box/message-box';
export class ErrorMessage {
    private object: HttpErrorResponse | string | any;
    private type: ErrorType;
    constructor(error: HttpErrorResponse | string | any) {
        this.object = error;
        if (error) {
            if (error instanceof HttpErrorResponse) {
                this.type = 'HttpErrorResponse';
            } else if (typeof (error) === 'string') {
                this.type = 'String';
            } else if (error.message) {
                if (typeof(error.message) === 'string') {
                    this.type = 'ObjectWithMessage';
                } else {
                    this.type = 'ObjectWithMessageObject';
                }

            }
        } else {
            this.type = 'NULL';
        }
    }
    get message(): string {
        switch (this.type) {
            case 'String':
                return (this.object as string);
                break;
            case 'HttpErrorResponse':
                {
                    const res = this.object as HttpErrorResponse;
                    return (res.error && res.error.message) || res.message || 'Unknow Error';
                }
                break;
            case 'ObjectWithMessage':
                return this.object.message;
                break;
            case 'ObjectWithMessageObject':
                return JSON.stringify(this.object.message);
                break;
            case 'NULL':
                return null;
            default:
                if (this.object && this.object.toString) {
                    return this.object.toString();
                }
                break;
        }
        return 'Unknow Error';
    }
    static parseError(error: any): string {
        return new ErrorMessage(error).message;
    }
    /**
     *  @deprecated กรุณาใช้ {@link MessageBox.alert}() แทน
     */
    static async alert(error: any) {
        if (error instanceof HttpErrorResponse) {
            const er = error.error as Blob;
            if (er instanceof Blob && er.type === 'application/json') {
                const erObj = JSON.parse(await er.text()) as { message: string };
                if (erObj.message) {
                    error = erObj.message;
                }
            }
        }
        const message = ErrorMessage.parseError(error);

        await Swal.fire({
            icon: 'error',
            title: message
        })

    }
}
