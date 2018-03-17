<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";
	$usertable="user_profiles";

	//Turn posted attributes into variables
	$post_userID= $_POST["userID"];

	//Retrieve all of the comics from the users collection
	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$sql = "SELECT * FROM comic_collections WHERE `userID` = '".$post_userID."'";
	$collectionResults = mysqli_query($link, $sql);

	$json = array();
	while($row = mysqli_fetch_array ($collectionResults)) {
		$dataSet = array(
			'comicTitle' => $row['comicTitle'],
			'comicID' => $row['comicID'],
			'comicImage' => $row['comicImage'],
		);
		array_push($json, $dataSet);
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;

	mysqli_close($link);
?>
