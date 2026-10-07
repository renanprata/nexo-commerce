import {sqliteTable,text,integer,primaryKey,index} from 'drizzle-orm/sqlite-core';
export const profiles=sqliteTable('profiles',{owner:text('owner').primaryKey(),data:text('data').notNull()});
export const carts=sqliteTable('carts',{owner:text('owner').notNull(),product:text('product').notNull(),quantity:integer('quantity').notNull()},t=>[primaryKey({columns:[t.owner,t.product]})]);
export const favorites=sqliteTable('favorites',{owner:text('owner').notNull(),product:text('product').notNull()},t=>[primaryKey({columns:[t.owner,t.product]})]);
export const orders=sqliteTable('orders',{id:text('id').primaryKey(),owner:text('owner').notNull(),created:text('created').notNull(),status:text('status').notNull(),total:integer('total').notNull(),data:text('data').notNull(),requestKey:text('request_key').notNull().unique()},t=>[index('idx_orders_owner_created').on(t.owner,t.created)]);
export const orderItems=sqliteTable('order_items',{order:text('order_id').notNull().references(()=>orders.id),product:text('product').notNull(),name:text('name').notNull(),quantity:integer('quantity').notNull(),price:integer('price').notNull()},t=>[primaryKey({columns:[t.order,t.product]})]);
export const overrides=sqliteTable('product_overrides',{product:text('product').primaryKey(),data:text('data').notNull()});
