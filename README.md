## prisma sql
#### some
```ts
await prisma.user.findFirst({
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
```
```sql
SELECT "public"."User"."id", "public"."User"."email", "public"."User"."name" FROM "public"."User" WHERE ("public"."User"."id") IN (SELECT "t1"."authorId" FROM "public"."Post" AS "t1" WHERE ("t1"."published" = $1 AND "t1"."authorId" IS NOT NULL)) ORDER BY "public"."User"."id" DESC LIMIT $2 OFFSET $3
null
```