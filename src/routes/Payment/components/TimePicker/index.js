import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

import styles from './TimePickerStyles';

export const TimePicker = ({ show, closeDatePicker, getDate }) => {
    return (
      <View style={{ flex: 1 }}>
        <DateTimePicker
          mode="time"
          isVisible={show}
          onCancel={closeDatePicker}
          onConfirm={getDate}
        />
      </View>
    );
};

export default TimePicker;
