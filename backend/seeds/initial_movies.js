/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    { title: 'Vicky Cristina Barcelona' },
    { title: 'Orfeu Negro' },
    { title: 'Midnight' },
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
    { title: 'The Avengers' },
    { title: 'Ironman' },
    { title: 'Captain America' },
    { title: 'The Hulk' },
    { title: 'Suicide Squad' },
    { title: 'Goodfellas' },
  { title: 'Pulp Fiction' },
  { title: 'The Shawshank Redemption' },
  { title: 'Forrest Gump' },
  { title: 'The Matrix' },
  { title: 'American Beauty' },
  { title: 'Fight Club' },
  { title: 'Gladiator' },
  { title: 'Memento' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring' },
  { title: 'City of God' },
  { title: 'Kill Bill: Vol. 1' },
  ]);
};
