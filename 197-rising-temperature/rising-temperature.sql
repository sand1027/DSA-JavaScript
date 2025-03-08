# Write your MySQL query statement below
select w1.id from Weather w1  join Weather w2  on Date( w1.recordDate) = Date(w2.recordDate) + INTERVAL 1 DAY where w1.temperature  > w2.temperature 



-- performing self join
-- using interval because pf the constraint