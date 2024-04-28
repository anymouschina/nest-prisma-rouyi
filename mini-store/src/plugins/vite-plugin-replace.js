//因为小程序不支持动态创建全局组建，需要手动填充在template内，这个插件用于提前填充内容到template


// 在 Vue 文件中定位模板的起始和结束位置
function findTemplate(code) {
  const templateStart = code.indexOf('<template>');
  const templateEnd = code.indexOf('</template>', templateStart);
  return [templateStart, templateEnd];
}
// vite-plugin-modify-output.js
export default function modifyOutputPlugin(insertHtml = '') {
  return {
    name: 'modify-output',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        // 解析 Vue 文件内容，定位到模板部分
        const [templateStart, templateEnd] = findTemplate(code);
        
        if (templateStart !== -1 && templateEnd !== -1) {
          // 替换原始模板内容
          const modifiedCode = code.slice(0, templateEnd) + insertHtml + code.slice(templateEnd ,code.length);
          return modifiedCode;
        }
      }
      return null;
    }
  };
}
