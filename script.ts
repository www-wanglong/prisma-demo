import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn']
})


async function main() {
  // ... you will write your Prisma Client queries here
}

main().then(async () => {
    await prisma.$disconnect()
    const findUser = await prisma.user.findFirst({
      where: {
        posts: {
          some: {
            published: true
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    })
    console.log(findUser)
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })