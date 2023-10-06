import { Knex } from "knex";

const tableName = "users";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.uuid("id").primary().notNullable();
        table.string("name");
        table.string("email");
        table.string("poneNumber");
        table.string("password");
        table.date("DOB");
        table.string("imageUrl");
        table.timestamps(true, true);

    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');  
}

