// TODO: Create a function that returns a license badge with link based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '<a href="https://opensource.org/license/mit/">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>';
}
if(license=== 'Apache license 2.0'){
  return '<a href="https://opensource.org/license/apache-2-0/">[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)</a>';
}
if(license=== 'ISC License (ISC)'){
  return '<a href="https://opensource.org/license/isc-license-txt/">[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)</a>';
}
if(license=== 'GNU GPL v3'){
  return '<a href="https://www.gnu.org/licenses/gpl-3.0">[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)</a>';
}
if(license=== 'None'){
  return '<a href="#">[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)</a>';
}
};

// TODO: Create a function that returns the license section of README

// Dynamic date for license
let year=new Date().getFullYear()

function renderLicenseSection(license,name) {

  if (license === 'MIT') {
    return `Copyright ${year} | ${name}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
}
if(license=== 'Apache license 2.0'){
  return `Copyright ${year} | ${name}

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`;
}
if(license=== 'ISC License (ISC)'){
  return `Copyright ${year} | ${name}

  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
  
  THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
}
if(license=== 'GNU GPL v3'){
  return `Copyright (C) ${year}  | ${name}

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
}
if(license=== 'None'){
  return 'N/A';
}
}

// Creating Readme Template function
const generateReadMe = ({ name,title, description, installation, instruction, credits, license, contributeGuidelines, test, github, email }) => {

  const licenseBadge = renderLicenseBadge(license,name);
  const licenseSection = renderLicenseSection(license,name);
  return `
# ${title}  ${licenseBadge}

## Description

${description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${instruction}

## Credits

${credits}

## License

## ${license}

${licenseSection}


## How to Contribute

${contributeGuidelines}

## Tests

${test}

## Questions

If you have any questions you can contact me through:

Email: ${email}

My Github is linked below:

Github: Github.com/${github}

`;
};

module.exports=generateReadMe;