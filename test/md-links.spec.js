const mdLinks = require('../index.js');

describe('mdLinks', () => {
  test('is an object', () => {
   expect(typeof mdLinks).toBe('object');
  });
});

describe('absolutePath', () => {
  it('Should be a function', () => {
    expect(typeof mdLinks.absolutePath).toBe('function');
  });

  it('Should validate if path is absolute', () => {
    expect(mdLinks.absolutePath('/test/demo_path.js')).toBe(true);
  });
});

describe('relativePath', () => {
  it('Should be a function', () => {
    expect(typeof mdLinks.relativePath).toBe('function');
  });

  it('Should turn path to absolute', () => {
    expect(mdLinks.relativePath('files')).toBe('');
  });
});

describe('existingPath', () => {
  it('Should be a function', () => {
    expect(typeof mdLinks.existingPath).toBe('function');
  });

  it('Should validate if path is a valid directory or file', () => {
    expect(mdLinks.existingPath('c:\\dog.jpg')).toBe(false);
  });

  it('Should validate if path is a valid directory or file', () => {
    expect(mdLinks.existingPath('\\Downloads\\chocolate-doom-3.0.0-win32')).toBe(true);
  });
});
