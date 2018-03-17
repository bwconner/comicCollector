<?php

	//Connect To Database
	$hostname="localhost";
	$username="bwconner_test";
	$password="dbtest123";
	$dbname="comic_collector";
	$usertable="user_profiles";

	//Turn posted attributes into variables
	$post_username= $_POST["uniquename"];

	$link = mysqli_connect($hostname,$username, $password, $dbname);
	$sql = "SELECT 1 FROM user_profiles WHERE `username` = '".$post_username."'";
	$result = mysqli_query($link, $sql);
	if ($result && mysqli_num_rows($result) > 0) {
		echo "false";
	} else {
		echo "true"; 
	}

	mysqli_close($link);
?>
