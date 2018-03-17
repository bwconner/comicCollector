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
	$post_email= $_POST["email"];
	$post_firstName= $_POST["firstname"];
	$post_profileText= $_POST["profileText"];
	$post_favoriteCharacter= $_POST["favoriteCharacter"];

	//Insert the new profile into the user profiles table in DB
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$sql = "UPDATE user_profiles SET `firstName` = '".$post_firstName."', `favoriteCharacter` = '".$post_favoriteCharacter."', `profileText` = '".$post_profileText."' WHERE `userName` = '".$post_username."' AND `userID` = '".$post_userID."'";
	mysqli_query($link, $sql);
	mysqli_close($link);
?>
