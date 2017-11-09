function createJestTest(filename) {
    const fileWithOutExt = filename.replace(/\.[^/.]+$/, "");
    const readableFilename = capitalizeFirstLetter(fileWithOutExt);
    return (
`import React from 'react';
import matchesSnapshot from 'upgrade-ui-utils/utils/assertions/matches-snapshot';

import ${readableFilename} from '../${fileWithOutExt}';

it('Should render ${readableFilename} correctly', () => {
  matchesSnapshot(<${readableFilename} />);
});
`);

}

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)


module.exports = { createJestTest };
