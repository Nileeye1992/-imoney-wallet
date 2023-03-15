import { HttpErrorResponse } from "@angular/common/http";
import Swal, { SweetAlertResult } from "sweetalert2";
import { ErrorMessage } from "../error-message";

export class MessageBox {
    static async confirm(message: string, okText = 'ตกลง', cancelText = 'ยกเลิก'): Promise<SweetAlertResult<boolean>> {
        return await Swal.fire({
            icon: 'question',
            title: message,
            showCancelButton: true,
            confirmButtonText: okText,
            cancelButtonText: cancelText,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
    }
    static async confirmYesNo(message: string): Promise<SweetAlertResult<boolean>> {
        return MessageBox.confirm(message, 'ใช่', 'ไม่ใช่');
    }
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
    static async show(message: string, okText = 'ตกลง'): Promise<SweetAlertResult<boolean>> {
        return await Swal.fire({
            icon: 'info',
            title: message,
            showCancelButton: false,
            confirmButtonText: okText,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
    }
    static async success(message: string): Promise<SweetAlertResult<boolean>>  {
        return await Swal.fire({
            icon: 'success',
            title: message
          });
    }
    static async twoChoices(message: string, choice1 = 'ตัวเลือกที่1', choice2 = 'ตัวเลือกที่2', cancelText = 'ยกเลิก'): Promise<SweetAlertResult<boolean>> {
        return await Swal.fire({
            title: message,
            confirmButtonText: choice1,
            confirmButtonColor: '#3085d6',
            showDenyButton: true,
            denyButtonText: choice2,
            denyButtonColor: '#28B463',
            showCancelButton: true,
            cancelButtonText: cancelText,
            cancelButtonColor: '#d33',
        })
    }
}