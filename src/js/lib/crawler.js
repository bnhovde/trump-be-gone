/* global chrome document */

import names from '../data/names';

const processPage = (language) => {
  // Get translated names
  const nameArr = names(language)('trump');
  const elements = document.getElementsByTagName('*');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
      const node = element.childNodes[j];

      if (node.nodeType === 3) {
        const text = node.nodeValue;
        const match = text
          .replace(/alt-right/gi, 'nazi')
          .replace(/trump/gi, nameArr[Math.floor(Math.random() * nameArr.length)])
          .replace(/Mr. Trump/gi, nameArr[Math.floor(Math.random() * nameArr.length)])
          .replace(/President Trump/gi, nameArr[Math.floor(Math.random() * nameArr.length)])
          .replace(/donald trump/gi, nameArr[Math.floor(Math.random() * nameArr.length)]);

        if (match !== text) {
          element.replaceChild(document.createTextNode(match), node);
        }
      }
    }
  }
};

export {
  processPage,
};

