'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
    // this will set the ID as the primary key for the address table.
    static get primaryKey () {
        // return ID
        return 'id'
      }
      user(){
        return this.hasOne("App/Models/Customer", "id", "id")
}
}
// end of address class.

module.exports = Address
