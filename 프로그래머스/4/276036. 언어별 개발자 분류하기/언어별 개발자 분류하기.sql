-- 코드를 작성해주세요
-- 1. 이진수 skil_code & code

-- select code from skillcodes where category ='Front End'
-- select code from SKILLCODES where name = 'Python'

SELECT * 
FROM (
    SELECT 
        CASE 
            WHEN d.skill_code & (SELECT code FROM SKILLCODES WHERE name = 'Python') != 0 
                and d.skill_code & (select sum(code) From skillcodes where category ='Front End') != 0
                THEN 'A'
            WHEN d.skill_code & (SELECT code FROM SKILLCODES WHERE name = 'C#') != 0 THEN 'B'
            WHEN d.skill_code & (select sum(code) From skillcodes where category ='Front End') != 0 
                THEN 'C'
            else null
        END AS GRADE, 
        d.id, 
        d.email
    FROM DEVELOPERS AS d
) as gradeTable
WHERE grade is not null
order by grade, id