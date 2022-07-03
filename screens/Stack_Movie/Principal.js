import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ListMovie from "../../app/components/List_Movie/List_Movie";

const Movie_principal = () => {
	const navigate = useNavigation();
	return <ListMovie />;
};

export default Movie_principal;
