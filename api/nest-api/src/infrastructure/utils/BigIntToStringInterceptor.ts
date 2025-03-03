import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class BigIntToStringInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data) => this.convertBigInt(data))
        );
    }

    private convertBigInt(value: any): any {
        if (typeof value === 'bigint') {
            return value.toString();
        }

        if (Array.isArray(value)) {
            return value.map((item) => this.convertBigInt(item));
        }

        if (value !== null && typeof value === 'object') {
            for (const key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) {
                    value[key] = this.convertBigInt(value[key]);
                }
            }
        }

        return value;
    }
}