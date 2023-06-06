/* 
describe = test suite = groepje van tests
it = individuele test
expect = verwacht gedrag (matcher)
*/

import { CamelCasePipe } from './camel-case.pipe';

describe('Pipe: CamelCase', () => {
  let sut: CamelCasePipe;

  beforeEach(() => {
    // Arrange
    sut = new CamelCasePipe();
  });

  it('should lowercase a single word', () => {
    const sut = new CamelCasePipe();
    const output = sut.transform('hALlo');
    expect(output).toBe('hallo');
  });

  it('should lowercase all the letters of other words except for the first letter and then camelcase it', () => {
    // Act
    const actual = sut.transform('hallo even iets testen');

    // Assert
    expect(actual).toBe('halloEvenIetsTesten');
  });
  
  it('should handle double spaces gracefully', () => {
    // Act
    const actual = sut.transform('hallo    daar');
  
    // Assert
    expect(actual).toBe('halloDaar');
  });

  it('should replace an undefined value with an empty string', () => {
    const output = sut.transform(undefined);
    expect(output).toBe('');
  });
});


