import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(private $localStorage: LocalStorageService) {

  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.$localStorage.retrieve("authontificationToken");
   
    if (token) {
      const  clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer `+token)
                            .set('Accept','application/json')
         });
     
     return next.handle(clonedRequest)
      
    }
    else {
      return next.handle(req);
    }
  }
}