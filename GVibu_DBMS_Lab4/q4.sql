SELECT O.* FROM `ORDER` AS O;
SELECT * FROM supplier_pricing;
SELECT * FROM product;

SELECT O.* FROM `ORDER` AS O
inner join supplier_pricing as sp
where o.PRICING_ID=sp.PRICING_ID;
select p.* from
(
	SELECT O.* FROM `ORDER` AS O
	inner join supplier_pricing as sp
	where o.PRICING_ID=sp.PRICING_ID
) as p
inner join customer as c
where p.CUS_ID=c.CUS_ID;
select c.CUS_ID,c.CUS_NAME, p.ord_id,p.ord_amount from
(
	SELECT O.* FROM `ORDER` AS O
	inner join supplier_pricing as sp
	where o.PRICING_ID=sp.PRICING_ID
) as p
inner join customer as c
where p.CUS_ID=c.CUS_ID and c.CUS_ID=2; 
 
select q.CUS_ID, q.cus_name,q.ord_id, product.pro_name from
(
	select c.CUS_ID,c.CUS_NAME, p.ord_id,p.ord_amount, p.pro_id from
	(
		SELECT O.*, sp.pro_id FROM `ORDER` AS O
		inner join supplier_pricing as sp
		where o.PRICING_ID=sp.PRICING_ID
	) as p
	inner join customer as c
	where p.CUS_ID=c.CUS_ID and c.CUS_ID=2
) as q
inner join product
on q.pro_id= product.pro_id;