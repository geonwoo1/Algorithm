-- 코드를 입력하세요
SELECT 
    INGREDIENT_TYPE,
    SUM(TOTAL_ORDER) AS TOTALORDER 
FROM
    FIRST_HALF AS FH
LEFT JOIN
    ICECREAM_INFO AS II
    ON
    FH.FLAVOR = II.FLAVOR
GROUP BY
    II.INGREDIENT_TYPE