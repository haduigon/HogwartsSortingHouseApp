import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";

const ModalMessage = ({
  message,
  isVisible,
  onClose = () => {},
}: {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  // Determine the color based on the message type
  const isPositiveMessage =
    message.toLowerCase().includes("success") ||
    message.toLowerCase().includes("positive");

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.messageContainer}>
          <Text
            style={[
              styles.messageText,
              { color: isPositiveMessage ? "green" : "red" },
            ]}
          >
            {message}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  messageContainer: {
    backgroundColor: "transparent", // Fully transparent background
    padding: 20,
  },
  messageText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ModalMessage;
