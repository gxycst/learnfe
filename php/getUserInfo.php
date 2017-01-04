<?php 



$conn=mysql_connect('localhost','root','mc54899933');

$sql='use vuelearn';

mysql_query($sql,$conn);


$sql='set names utf8';

mysql_query($sql);


$sql="select * from user where name='tjq'";


$rs=mysql_query($sql,$conn);


var_dump(mysql_fetch_array($rs));



//$test=mqsql_fetch_array($rs);



 ?>