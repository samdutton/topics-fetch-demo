/* Copyright 2024 Google LLC.
SPDX-License-Identifier: Apache-2.0 */

(async () => {
    if ('browsingTopics' in document && 
    document.featurePolicy.allowsFeature('browsing-topics')) {
    console.log('🦜 document.browsingTopics():\n✅ Supported by browser\n✅ Allowed by Permissions Policy');
    console.log('Now calling await document.browsingTopics() ...');
    try {
      const topics = await document.browsingTopics();
      console.log('document.browsingTopics() return value:', topics);
    } catch (error) {
        console.log('Error calling document.browsingTopics(): ', error);
    }
  } else {
    console.log('⚠️ document.browsingTopics() is either not supported by this browser, or disallowed by Permissions Policy.');
  }
})();
