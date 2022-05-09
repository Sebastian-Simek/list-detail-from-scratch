// IMPORT MODULES under test here:
import { renderComposerNamesDetails } from '../render-utils.js';
import { composersArray } from '../composers.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing renderComposer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected2 = `<div><h2>J.S Bach</h2><img src="../assets/alchemy-logo.png"><p>Baroque</p><ul>Hits:<li>Cello Suite in G Major: BWV 1007</li><li>Brandenburg Concerto No. 3: BWV 1048</li><li>Prelude No. 1 in C Major: BWV 846</li></ul></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = renderComposerNamesDetails(composersArray[0]);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2.outerHTML, expected2);
   
});
