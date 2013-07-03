/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

describe("base64", function () {
    var base64 = require('cordova/base64');

    it("can base64 encode a typed array", function () {
        var view = new Uint8Array(6);
        for (var i = 0; i < view.length; i++) {
            view[i] = i;
        }
        expect(base64.fromUint8Array(view.subarray(0,1))).toBe('AA==');
        expect(base64.fromUint8Array(view.subarray(0,2))).toBe('AAE=');
        expect(base64.fromUint8Array(view.subarray(0,3))).toBe('AAEC');
        expect(base64.fromUint8Array(view.subarray(0,4))).toBe('AAECAw==');
        expect(base64.fromUint8Array(view.subarray(0,5))).toBe('AAECAwQ=');
        expect(base64.fromUint8Array(view)).toBe('AAECAwQF');
    });

    it("can base64 encode an ArrayBuffer", function () {
      var buffer = new Buffer('Some Awesome Test This Is!', 'binary')
        , base64string = buffer.toString('base64')
        , arrayBuffer = new ArrayBuffer(buffer.length)
        , view = new Uint8Array(arrayBuffer);

      for (var i = 0; i < buffer.length; i++) {
        view[i] = buffer[i];
      }

      expect(base64.fromArrayBuffer(arrayBuffer)).toBe(base64string);
    });
});
