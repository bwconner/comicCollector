<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";

	//Turn posted attributes into variables
	$post_username= $_POST["username"];
	$post_userID= $_POST["userID"];
	$post_userSessionID= $_POST["userSessionID"];
	$post_expireDate= $_POST["expireDate"];

	//Insert the new profile into the user profiles table in DB
	$link = mysqli_connect($hostname,$username, $password, $dbname);

	$sessionremove = "DELETE FROM user_sessions WHERE `userName` = '".$post_username."' AND `userID` = '".$post_userID."'";
	$sessionupdate = "INSERT user_sessions (userID, userName, sessionID, expirationDate) VALUES ('".$post_userID."', '".$post_username."','".$post_userSessionID."','".$post_expireDate."')";

	$userresult = mysqli_query($link, $sessionremove);
	$cookieresult = mysqli_query($link, $sessionupdate);

	mysqli_close($link);
?>
