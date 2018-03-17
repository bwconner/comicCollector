<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";
	$usertable="user_profiles";

	//Turn posted attributes into variables
	$post_username= $_POST["username"];
	$post_userID= $_POST["userID"];
	$post_cookieID= $_POST["cookieID"];
	$post_sessionID= $_POST["sessionID"];


	//Insert the new profile into the user profiles table in DB
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$usersql = "SELECT * FROM user_profiles WHERE `userID` = '".$post_userID."' AND `userName` = '".$post_username."' AND `cookieID` = '".$post_cookieID."'";
	$sessionsql = "SELECT * FROM user_sessions WHERE `userID` = '".$post_userID."' AND `userName` = '".$post_username."' AND `sessionID` = '".$post_sessionID."'";

	$userresult = mysqli_query($link, $usersql);
	$sessionresult = mysqli_query($link, $sessionsql);
	if ($userresult && mysqli_num_rows($userresult) > 0 && $sessionresult && mysqli_num_rows($sessionresult) > 0) {
		echo "true";
	} else {
		echo "false"; 
	}

	mysqli_close($link);
?>
