-- 코드를 입력하세요
SELECT ai.NAME, ai.DATETIME
from ANIMAL_INS as ai
left join ANIMAL_OUTS as ao on ai.animal_id = ao.animal_id
where ao.datetime is null
order by ai.datetime
limit 3