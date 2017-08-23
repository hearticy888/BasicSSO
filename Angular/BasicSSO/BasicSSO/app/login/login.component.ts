﻿/*
* Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AuthHelper } from "../helper/authHelper";

@Component({
    encapsulation: ViewEncapsulation.None,
    moduleId: module.id,
    selector: 'loginform',
    templateUrl: 'login.component.template.html'
})

export class Login implements OnInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private auth: AuthHelper) {
    }

    ngOnInit() {
    }

    login() {
        this.auth.login();
    }

    isLogin() {
        return this.auth.IsLogin();
    }
}