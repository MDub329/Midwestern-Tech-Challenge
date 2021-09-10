
exports.up = function (knex) {
    return knex.schema.alterTable('heading_content', table => {
        table.string('url').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.alterTable('heading_content', table => {
        table.dropColumn('url')
    })
};
