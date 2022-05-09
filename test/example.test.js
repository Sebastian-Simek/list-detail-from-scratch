// IMPORT MODULES under test here:
import { renderComposerNames } from '../utils.js';
import { composersArray } from '../composers.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing renderComposer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div>Composers<h1>J.S Bach</h1><p>tbd</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderComposerNames(composersArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
