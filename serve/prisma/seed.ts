import { PrismaClient } from '@prisma/client';
//npx prisma db seed 执行填充命令
const prisma = new PrismaClient();

async function main() {
  // await prisma.admin.deleteMany();

  // console.log('Seeding...');

  // const user1 = await prisma.user.create({
  //   data: {
      
  //   },
  // });
  // const user2 = await prisma.user.create({
  //   data: {
  //     role_codes:'',  // 角色代号
  //     username:'admin' , // 用户名
  //     password:'12345678',  // 密码
  //     nickname:'测试'  ,// 昵称
  //     phone:'13627331273',  // 手机号
  //     weixin:'lbq11147',  // 微信号
  //     qq:'624144061' , // QQ号
  //     email:'624144061@qq.com',  // 邮箱
  //     avatar:'',  // 头像
  //     is_system:1  // 是否系统数据（不可删除）
  //   },
  // });
  // const user2 = await prisma.user.create({
  //   data: {
  //     email: 'bart@simpson.com',
  //     firstname: 'Bart',
  //     lastname: 'Simpson',
  //     role: 'ADMIN',
  //     password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
  //     posts: {
  //       create: [
  //         {
  //           title: 'Subscribe to GraphQL Weekly for community news',
  //           content: 'https://graphqlweekly.com/',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: false,
  //         },
  //       ],
  //     },
  //   },
  // });

  // console.log({ user1 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
