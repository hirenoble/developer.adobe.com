/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const assert = require('assert');

describe('helix site smoke tests', function suite() {
  this.timeout(30000);

  it('should load homepage which proxies to adobe i/o', async () => {
    await browser.url('/');

    const title = await browser.getTitle();
    assert.equal(title, 'Adobe I/O');
  });
  it('should load xd docs substrain', async () => {
    await browser.url('/xd/docs');
    const docsSummary = await browser.$('#docs-summary');
    const summaryDisplayed = await docsSummary.isExisting();
    assert(summaryDisplayed, 'docs summary does not exist!');
    const editButton = await browser.$('#edit-button');
    const buttonDisplayed = await editButton.isExisting();
    assert(buttonDisplayed, 'edit button does not exist!');
    const articleContents = await browser.$('#article-contents');
    const contentsDisplayed = await articleContents.isExisting();
    assert(contentsDisplayed, 'content container does not exist!');
  });
  it('should load the central developer support page', async () => {
    await browser.url('/support');

    const title = await browser.getTitle();
    assert.equal(title, 'Developer Support');
  });
});
