
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('heading_content').del()
    .then(function () {
      // Inserts seed entries
      return knex('heading_content').insert([
        { id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut odio ac ante blandit elementum ac et nunc.', header_title: 'Heading Two' },
        { id: 2, content: 'Vivamus bibendum pulvinar ante sit amet fermentum. Pellentesque luctus interdum quam. ', header_title: 'Heading Two' },
        { id: 3, content: 'Fusce mattis sapien nec sem tempor convallis. Aenean quis sapien dignissim, tempor nulla at, cursus orci. ', header_title: 'Heading Two' },
      ]);
    });
};
