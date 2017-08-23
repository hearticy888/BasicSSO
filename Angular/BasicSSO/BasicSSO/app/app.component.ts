﻿/*
* Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/
import { Component, OnInit } from '@angular/core';
import { AuthHelper } from "./helper/authHelper";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.template.html',
    styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
    constructor(
        private auth: AuthHelper) {
    }
    ngOnInit() {
    }
}