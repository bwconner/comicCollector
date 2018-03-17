<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";
	$usertable="user_profiles";

	//Turn posted attributes into variables
	$post_userID= $_POST["userID"];
	$post_comicId= $_POST["comicId"];
	$post_comicTitle= $_POST["comicTitle"];
	$post_comicCharacter= $_POST["comicCharacter"];
	$post_comicDate= $_POST["comicDate"];
	$post_comicImage= $_POST["comicImage"];

	//Insert the new profile into the user profiles table in DB
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$sql = "INSERT comic_collections (userID, comicID, comicTitle, comicCharacter, comicDate, comicImage, featuredComic)
			VALUES ('".$post_userID."', '".$post_comicId."','".$post_comicTitle."','".$post_comicCharacter."', '".$post_comicDate."','".$post_comicImage."', 0)";
	mysqli_query($link, $sql);
	mysqli_close($link);
?>
