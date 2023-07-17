const knex = require("../database/knex");

class NotesController {
  async create(request, response) {
    const { title, description, tags, link } = request.body;
    const { user_id } = request.params;

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id,
    });

    const linksInsert = link.map((linkk) => {
      return {
        note_id,
        url: linkk,
      };
    });
    await knex("link").insert(linksInsert);

    const tagsInsert = tags.map((name) => {
      return {
        note_id,
        name,
        user_id,
      };
    });
    await knex("tags").insert(tagsInsert);

    response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex("notes").where({ id }).first();
    const tags = await knex("tags").where({ note_id: id }).orderBy("name");
    const link = await knex("link")
      .where({ note_id: id })
      .orderBy("created_at")
      .where({ note_id: id })
      .orderBy("created_at");
    return response.json({
      ...note,
      tags,
      link,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("tags").where({ note_id: id }).delete();

    await knex("link").where({ note_id: id }).delete();

    await knex("notes").where({ id }).delete();

    return response.json();
  }
}

module.exports = NotesController;
