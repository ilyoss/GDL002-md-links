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
    expect(mdLinks.relativePath('files')).toBe('C:\\Users\\ilytr\\Desktop\\Laboratoria\\MD-Links\\files');
  });
});

describe('existingPath', () => {
  it('Should be a function', () => {
    expect(typeof mdLinks.existingPath).toBe('function');
  });

  it('Should be "true" after it validates that the file exists', () => {
    expect(mdLinks.existingPath('README.md')).toBe(true);
  });

  it('Should be "false" after it validates that the file does not exist', () => {
    expect(mdLinks.existingPath('README.txt')).toBe(false);
  });

  it('Should be "true" after it validates that the directory exists', () => {
    expect(mdLinks.existingPath('C:\\Users\\ilytr\\Downloads\\chocolate-doom-3.0.0-win32')).toBe(true);
  });

  it('Should be "false" after it validates that the directory does not exist', () => {
    expect(mdLinks.existingPath('..\\FalseDir')).toBe(false);
  });

});
