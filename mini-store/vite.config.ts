import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import modifyOutputPlugin from "./src/plugins/vite-plugin-replace";
import moveFilesPlugin from "./src/plugins/vite-plugin-moveFile";
import * as path from 'node:path'
import updatePagesPlugin from "./src/plugins/vite-plugin-updatePages";
updatePagesPlugin();// 更新pages.json
const insertHtml = ``;//需要插入所有页面template的内容
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    modifyOutputPlugin(insertHtml),
    uni(),
    moveFilesPlugin({
      source:path.join(__dirname,  'dist',process.env.NODE_ENV === 'production' ? 'build' : 'dev',process.env.UNI_PLATFORM,'tab-bar'), 
      destination:path.join(__dirname, 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, 'custom-tab-bar')
    })
  ],
});
