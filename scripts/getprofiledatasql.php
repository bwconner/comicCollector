<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";

	//Turn posted attributes into variables
	$post_userID= $_POST["userID"];

	//Insert the new profile into the user profiles table in DB
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$usernameSql = "SELECT `userName` FROM user_profiles WHERE `userID` = '".$post_userID."'";
	$firstnameSql = "SELECT `firstName` FROM user_profiles WHERE `userID` = '".$post_userID."'";
	$characterSql = "SELECT `favoriteCharacter` FROM user_profiles WHERE `userID` = '".$post_userID."'";
	$descriptionSql = "SELECT `profileText` FROM user_profiles WHERE `userID` = '".$post_userID."'";
	$imageSql = "SELECT `profileImage` FROM user_profiles WHERE `userID` = '".$post_userID."'";

	$usernameResult = mysqli_query($link, $usernameSql);
	$firstnameResult = mysqli_query($link, $firstnameSql);
	$characterResult = mysqli_query($link, $characterSql);
	$descriptionResult = mysqli_query($link, $descriptionSql);
	$imageResult = mysqli_query($link, $imageSql);

	$usernameStr = mysqli_fetch_row($usernameResult);
	$firstnameStr = mysqli_fetch_row($firstnameResult);
	$characterStr = mysqli_fetch_row($characterResult);
	$descriptionStr = mysqli_fetch_row($descriptionResult);
	$imageStr = mysqli_fetch_row($imageResult);

	$output = "username=" . $usernameStr[0] . "&firstname=" . $firstnameStr[0] . "&character=" . $characterStr[0] . "&description=" . $descriptionStr[0] . "&imageSrc=" . $imageStr[0];
	echo $output;

	mysqli_close($link);
?>
