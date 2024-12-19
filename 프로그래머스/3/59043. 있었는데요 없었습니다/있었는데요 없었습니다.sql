-- 코드를 입력하세요
SELECT ai.ANIMAL_ID, ai.NAME
from ANIMAL_INS as ai
left join ANIMAL_OUTS as ao on ai.ANIMAL_ID = ao.ANIMAL_ID
where ao.DATETIME
 < ai.DATETIME
order by ai.DATETIME asc