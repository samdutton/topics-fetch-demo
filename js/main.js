/* Copyright 2023 Google LLC.
SPDX-License-Identifier: Apache-2.0 */

const fetchDataEl = document.getElementById('fetch-data');
const noHeadersEl = document.getElementById('no-headers');

let currentTopics = '';

function makeFetchRequest() {
  fetch('https://topics-server.glitch.me', {browsingTopics: true}).
    then(function(response) {
    // console.log(response);
      return response.json();
    }).then(function(json) {
      const topics = json['sec-browsing-topics'];      
      if (topics && topics !== currentTopics) {
        noHeadersEl.classList.add('hidden');
        fetchDataEl.innerHTML += fetchDataEl.innerHTML + 
            `<p>fetch() request made with sec-browsing-topics header: ` +
            `${JSON.stringify(topics, null, 2)}</p>`;
        // clearInterval(intervalId)
        currentTopics = topics;
      }
  });
}

const intervalId = setInterval(makeFetchRequest, 2000); 