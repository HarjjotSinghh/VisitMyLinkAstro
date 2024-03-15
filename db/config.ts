import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config
const Redirects = defineTable({
  columns: {
    slug: column.text({primaryKey: true}),
    to: column.text()
  },
})

export default defineDb({
  tables: { Redirects }
});
