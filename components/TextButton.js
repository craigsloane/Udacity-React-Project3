import React, {Componenet} from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'

export default function TextButton ({ children, onPress, style = {}, disabled }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            >
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}
