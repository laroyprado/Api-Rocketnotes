exports.up = (knex) =>
  knex.schema.createTable("link", (table) => {
    table.increments("id").notNullable();
    table.text("url");
    table
      .integer("note_id")
      .unsigned()
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("link");
