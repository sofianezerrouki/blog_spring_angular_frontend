import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "ngx-webstorage";
import { Observable } from "rxjs";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor{
    
    constructor(private $LocalStorage:LocalStorageService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token = this.$LocalStorage.retrieve('authentificationToken');
       console.log("jwt token "+token);
       if(token){
           const clouned = req.clone({
               headers :req.headers.set("Authorization","me "+token)
           });

       } else{
           return next.handle(req);
       }
        

    }

}