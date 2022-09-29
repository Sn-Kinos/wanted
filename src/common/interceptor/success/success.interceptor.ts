import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WantedResponse } from './success.interface';

@Injectable()
export class SuccessInterceptor<T> implements NestInterceptor<T, WantedResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<WantedResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          message: 'success',
          data: data.data,
        };
      })
    );
  }
}
