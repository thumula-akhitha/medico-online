'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
       table.increments()
        table.string('street').notNullable()
        table.string('city').notNullable()
        table.string('state').notNullable()
        table.string('country').notNullable()
        table.integer('zip', 60).notNullable()
        table.integer('customerId', 10).unsigned().notNullable()
        table.foreign('customerId').references('customers.id').onDelete('cascade')
        table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
