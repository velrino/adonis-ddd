'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.uuid('id').primary();
      table.uuid('company_place_id')
        .references('id')
        .inTable('companies_places')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer('status', 2).defaultTo(1);
      table.json('data');
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
