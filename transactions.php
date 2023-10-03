<?php
    try
    {
        $db_name="mysql:host=localhost;dbname=testing";
        $username="root";
        $password="";

        $conn= new PDO($db_name,$username,$password);
        $conn->beginTransaction();
        
        $sql1=$conn->prepare("INSERT INTO students (student_name,city,dob) VALUES (?,?,?)");
        $sql2=$conn->prepare("UPDATE city SET cstudents= cstudents+1 WHERE cname=?");

        if(!$sql1->execute(["Name","Place","DoB"]))
            throw new Exception('SQL 1 Failed');

        if(!$sql2->execute(["Place"]))
            throw new Exception('SQL 2 Failed');
        
        $conn->commit();
    }
    catch(Exception $e)
    {
        $conn->rollback();
        echo $e->getMessage();
    }
?>