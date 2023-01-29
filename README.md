# ↩️ Topics fetch request header demo

This site is part of a Topics API demo that shows how topics can be marked as observed, and then accessed, by using a `fetch()` or `XHR request`.  (By comparison, the demo sites linked from topics-demo.glitch.me call `document.browsingTopics()` from an iframe to observe and access topics.)

Code in [js/main.js](https://glitch.com~/tennis-tennis/js/main.js) makes a `fetch()` request to [topics-server.glitch.me](https://topics-server.glitch.me). In browsers that support the API, the `fetch()` request will include a `Sec-Browsing-Topics` header that lists topics observed by topics-server.glitch.me for the current user. 

The response from the service running at [topics-server.glitch.me](https://topics-server.glitch.me) includes the request headers in the body, and an `Observe-Browsing-Topics: ?1` header. This header instructs the browser that the topics provided in the `fetch()` request `Sec-Browsing-Topics` header should be used for topics calculation.

Code in [js/main.js](js/main.js) makes the following request every two seconds:

```
  fetch('https://topics-server.glitch.me/send-topics', 
    {browsingTopics: true});
```

If a request includes topics (which will happen if topics have been observed by code in requests to topics-server.glitch.me) the topics will be displayed below.

**This demo isn't anything like a real-world implementation: it only serves to show how topics can be included in request headers. **

[topics-demo.glitch.me](https://topics-demo.glitch.me/) explains how to run Chrome with command line flags as required by the demo. Access to topics in headers is supported in Chrome 111 and above. 


# License

Copyright 2022 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the “License”); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Please note: this is not a Google product.
