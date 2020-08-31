import React from "react";
import { Text, StyleSheet } from "react-native";

import Spacer from "./Spacer";

const Footer = () => {
  return (
      <Spacer>
        <Text style={styles.footer}>Copyright © {(new Date().getFullYear())} Amy Yuen Ying Chan</Text>
      </Spacer>
  );
};

const styles = StyleSheet.create({
  footer: {
    color: "grey",
    fontSize: "0.75em"
  }
});

export default Footer;