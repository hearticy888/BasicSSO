/*
* Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/
import { Injectable, Inject } from "@angular/core";
import { CookieHelper } from '../helper/CookieHelper';
import { Http, Headers, Response } from '@angular/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class AuthHelper {

    private meAPIUrl = 'api/me';
    constructor(
        private router: Router,
        private _http: Http) {
    }
    public IsLogin(): boolean {
        var token = CookieHelper.get('authType');
        return token && token != "undefined";
    }

    public getCurrentUser() {
        return this._http.get(this.meAPIUrl + '?t=' + new Date().getTime(), {})
            .map((response: Response) => response.json());
    }

    login() {
        window.location.href = "/auth/login/o365";
    }
}