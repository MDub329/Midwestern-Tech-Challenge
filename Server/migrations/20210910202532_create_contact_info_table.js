
exports.up = function (knex) {
    return knex.schema.createTable('contact_info', function (table) {
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('title').notNullable();
        table.string('email').notNullable();
        table.string('message').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('contact_info');
};
