const fs = require('fs');
const { readdir } = require('fs/promises');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const readFiles = async (path) => {
  return PNG.sync.read(fs.readFileSync(path));
}

const imagesList = async (dir) => {
  try {
    const files = await readdir(dir);
    let filesArray = [];

    for (const file of files) {
      const fileContent = await readFiles(dir + '/' + file);
      filesArray.push({'fileName': file, 'fileContent': fileContent});
    }

    return filesArray;
  } catch (err) {
    console.error(err);
  }
};

const compareCustom = async (baseDir, newDir, diffDir) => {
  const filesArrayBase  = await imagesList(__dirname + baseDir);
  const filesArrayNew = await imagesList(__dirname + newDir);

  filesArrayBase.length && filesArrayBase.map((file, index) => {
    const { fileName, fileContent } = file;
    const {width, height} = fileContent;
    const diff = new PNG({width, height});

    filesArrayNew.length && filesArrayNew.map((fileNew, indexNew) => {
      if(index === indexNew) {
        pixelmatch(
          fileContent.data,
          fileNew.fileContent.data,
          diff.data,
          width,
          height,
          {threshold: 0.1}
        );
        fs.writeFileSync(__dirname + diffDir + '/diff_' + fileName, PNG.sync.write(diff));
      }
    });
  });

  console.log('All images were compared. Please check "src' + diffDir + '" folder');

};

compareCustom('/images/base', '/images/new', '/images/diff');
