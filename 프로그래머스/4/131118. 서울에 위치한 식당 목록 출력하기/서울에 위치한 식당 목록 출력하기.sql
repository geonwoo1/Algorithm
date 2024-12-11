-- 코드를 입력하세요
SELECT ri.REST_ID, ri.REST_NAME, ri.FOOD_TYPE, ri.FAVORITES, ri.ADDRESS, ROUND(AVG(rr.REVIEW_SCORE),2) as SCORE
from REST_INFO as ri
join REST_REVIEW as rr on ri.rest_id = rr.rest_id 
where ri.ADDRESS LIke '서울%'
group by ri.rest_id
order by SCORE desc, ri.FAVORITES desc