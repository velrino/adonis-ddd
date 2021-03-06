'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CompanyPlaceSchema extends Schema {
  up() {
    this.create('companies_places', (table) => {
      table.uuid('id').primary();
      table.uuid('company_id')
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('status', 2).defaultTo(1).notNullable();
      table.boolean('scheduling').defaultTo(false).notNullable();
      table.integer('trucks', 5).defaultTo(1).notNullable();
      table.decimal('price', 10, 2).nullable();
      table.decimal('distance', 10, 8).nullable();
      table.decimal('latitude', 10, 8).nullable();
      table.decimal('longitude', 10, 8).nullable();
      table.json('data');
      table.timestamps()
    })
  }

  down() {
    this.drop('companies_places')
  }
}

module.exports = CompanyPlaceSchema
