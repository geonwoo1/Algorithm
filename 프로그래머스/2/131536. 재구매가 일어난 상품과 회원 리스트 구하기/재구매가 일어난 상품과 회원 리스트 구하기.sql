SELECT USER_ID , PRODUCT_ID 
FROM ONLINE_SALE
GROUP BY user_id, product_id
HAVING COUNT(*) >= 2
order by user_id asc,product_id desc ;