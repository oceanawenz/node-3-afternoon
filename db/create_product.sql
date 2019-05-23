-- Create Table product (
--     product_id Serial Primary Key,
--     name varchar(64) not null,
--     description varchar(64) not null,
--     price integer not null,
--     image_url text not null

-- )

insert into product (name, description, price, image_url)

values (
    $1,
    $2,
    $3,
    $4
);
