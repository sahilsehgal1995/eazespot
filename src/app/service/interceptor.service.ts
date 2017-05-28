import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {HttpService} from "./http.service";

export function InterceptedHttp(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new HttpService(xhrBackend, requestOptions);
}