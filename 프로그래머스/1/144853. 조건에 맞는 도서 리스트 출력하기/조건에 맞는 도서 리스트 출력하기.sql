-- 코드를 입력하세요
SELECT 
    BOOK_ID,
    DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') as PUBLISHED_DATE
FROM
    BOOK
WHERE 
    PUBLISHED_DATE LIKE '%2021%'
    and
    category = '인문'
order by
    PUBLISHED_DATE 