<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";

	//Turn posted attributes into variables
	$post_username= $_POST["username"];
	$post_password= $_POST["password"];

	//Insert the new profile into the user profiles table in DB
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$userIDsql = "SELECT `userID` FROM user_profiles WHERE `userName` = '".$post_username."' AND `password` = '".$post_password."'";
	$cookieIDsql = "SELECT `cookieID` FROM user_profiles WHERE `userName` = '".$post_username."' AND `password` = '".$post_password."'";

	$userresult = mysqli_query($link, $userIDsql);
	$cookieresult = mysqli_query($link, $cookieIDsql);
	$userresultStr = mysqli_fetch_row($userresult);
	$cookieresultStr = mysqli_fetch_row($cookieresult);
	$output = "userID=" . $userresultStr[0] . "&cookieID=" . $cookieresultStr[0];
	echo $output;

	mysqli_close($link);
?>
