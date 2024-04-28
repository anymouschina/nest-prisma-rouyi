/*
 * @Author: Sheng.Jiang
 * @Date: 2021-09-03 11:32:52
 * @LastEditTime: 2022-09-14 17:38:03
 * @LastEditors: Please set LastEditors
 * @Description: 正式环境配置文件
 * @FilePath: \meimei-admin\src\config\config.production.ts
 * You can you up，no can no bb！！
 */
import { defineConfig } from './defineConfig';
export default defineConfig({
  jwt: {
    secret: process.env.JWT_SECRET || '123456',
  },
  // typeorm 配置
  database: {
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USERNAME || 'root', //数据库账号
    password: process.env.MYSQL_PASSWORD || 'example', //数据库密码
    database: process.env.MYSQL_DATABASE || 'example_db', //数据库名称
    autoLoadModels: true,
    synchronize: true,
    logging: false,
  },
  // redis 配置
  redis: {
    config: {
      url: 'redis://localhost:6379',
    },
  },

  // 队列reids 配置
  bullRedis: {
    host: 'localhost',
    port: '6379',
    password: '',
  },

  //文件上传地址  例如： E:/upload/test
  uploadPath: '',

  // 是否演示环境
  isDemoEnvironment: false,
});
