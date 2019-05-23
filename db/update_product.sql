--update description of product by id
update product set description = $2 
where product_id = $1;