// IMPORT MODULES under test here:
import { renderComposerNamesDetails } from '../render-utils.js';
import { composersArray } from '../composers.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('testing renderComposer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const expected2 = `<div class="composers2"><h2>Johann Sebastian Bach</h2><img src="../assets/bach.jpeg"><p>Baroque</p><ul>Hits:<a href="https://www.youtube.com/watch?v=mGQLXRTl3Z0" target="_blank"><li>Cello Suite in G Major: BWV 1007</li></a><a href="https://www.youtube.com/watch?v=pdsyNwUoON0" target="_blank"><li>Brandenburg Concerto No. 3: BWV 1048</li></a><a href="https://www.youtube.com/watch?v=PXMVkQ70I88" target="_blank"><li>Prelude No. 1 in C Major: BWV 846</li></a></ul></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = renderComposerNamesDetails(composersArray[0]);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2.outerHTML, expected2);

});
