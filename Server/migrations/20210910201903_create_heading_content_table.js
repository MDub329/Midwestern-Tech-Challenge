
exports.up = function (knex) {
    return knex.schema.createTable('heading_content', function (table) {
        table.increments();
        table.string('content').notNullable();
        table.string('header_title').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('heading_content');
};
