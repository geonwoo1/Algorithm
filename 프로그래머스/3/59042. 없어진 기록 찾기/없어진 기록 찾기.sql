-- 코드를 입력하세요
SELECT ao.ANIMAL_ID, ao.NAME
from animal_outs as ao
left join ANIMAL_INS as ai on ao.ANIMAL_ID = ai.ANIMAL_ID 
where ai.animal_id is null