// rollup-plugin-move.js
import fs from 'fs-extra';
import path from 'path';

export default function moveFilesPlugin(options) {
  return {
    name: 'move-files-plugin',
    async writeBundle() {
      const { source, destination } = options;
      const sourcePath = path.resolve(source);
      const destinationPath = path.resolve(destination);

      // 检查目标目录是否存在，如果不存在则创建它
      fs.ensureDir(destinationPath);
      fs.copySync(sourcePath, destinationPath, { overwrite: true }, (err) => {
        if (err) {
          console.error(`移动文件失败: ${err}`)
        } else {
          console.log(`成功移动 ${sourceDir} 目录到 ${destinationDir} 目录`)
        }
      })
    }
  };
}
