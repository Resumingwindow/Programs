--variable
-- first approach
use hike;
set @name="shubham";
select @name;

--second approach
--using colon its setting the msg variable to msg and also using select printing
select @msg := "Hello world";

select @priceAVG := (
    select 
    AVG(priceEach)
    from orderdetails
    where orderdetails.productCode = "S18_1749"
);

DECLARE @vaar varchar(20)
SET @var = "shubham"
print(@var)

 DECLARE total_price Oct(8,2) DEFAULT 0.0; 
 DECLARE a,b,c INT DEFAULT 0;  

 DELIMITER //  
Create Procedure Test()  
    BEGIN  
        DECLARE A INT DEFAULT 100;  
        DECLARE B INT;  
        DECLARE C INT;  
        DECLARE D INT;  
        SET B = 90;  
        SET C = 45;  
        SET D = A + B - C;  
        SELECT A, B, C, D;  
    END //  
DELIMITER ;  
use hike;
call Test();