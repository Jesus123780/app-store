/* eslint-disable no-undef */
import AWS from 'aws-sdk'
import moment from 'moment'
import { Buffer } from 'buffer'
import { Alert } from 'react-native'
import Constants from 'expo-constants'
import parsePhoneNumber from 'libphonenumber-js'
import * as FileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import * as MediaLibrary from 'expo-media-library'
import * as DocumentPicker from 'expo-document-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
const primaryC = 'red'
const Bucket = 'red'
export const numberFormatM = val => {
    let money = 0
    let num = 0
    let value = 0
    let valParam = val
    if (valParam >= 1000000000) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`${num}000`)
        money += value
        valParam -= parseFloat(`${num}000000000`)
    }

    if (valParam >= 100000000) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`${num}00`)
        money += value
        valParam -= parseFloat(`${num}00000000`)
    }

    if (valParam >= 10000000) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`${num}0`)
        money += value
        valParam -= parseFloat(`${num}0000000`)
    }

    if (valParam >= 1000000) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`${num}`)
        money += value
        valParam -= parseFloat(`${num}000000`)
    }
    if (valParam >= 100000) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`0.${num}`)
        money += value
        valParam -= parseFloat(`${num}00000`)
    }
    if (valParam >= 10000) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`0.0${num}`)
        money += value
        valParam -= parseFloat(`${num}0000`)
    }
    if (valParam >= 1000) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`0.00${num}`)
        money += value
        valParam -= parseFloat(`${num}000`)
    }
    if (valParam >= 100) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`0.000${num}`)
        money += value
        valParam -= parseFloat(`${num}00`)
    }
    if (valParam >= 10) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`0.0000${num}`)
        money += value
        valParam -= parseFloat(`${num}0`)
    }
    if (valParam >= 1) {
        num = `${valParam}`.charAt(0)
        value = parseFloat(`0.00000${num}`)
        money += value
        valParam -= parseFloat(`${num}`)
    }

    return money.toFixed(2)
}

/**
 * busca en el localstore la información
 * @version 0.0.1
 * @param {string} key clave de búsqueda
 * @param {boolean} keyParse si se quiere parsear o no
 * @return {object} valor de búsqueda o si hay un error una alerta
 */
export const getData = async (key, keyParse) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return keyParse ? (jsonValue ? JSON.parse(jsonValue) : null) : jsonValue
    } catch (e) {
        return Alert.alert('', 'Ha ocurrido un error intente mas tarde.')
    }
}

/**
 * Busca un documento para retornarlo
 * @version 0.0.1
 * @param {object} options Opciónes de ver que tipos de documentos a recibir
 * @return {object} la información de un documento
 */
export const SelectDocument = async options => await DocumentPicker.getDocumentAsync(options)

/**
 * guarda en el localstore la información
 * @version 0.0.1
 * @param {string} por porcentaje para el wp
 * @return {number} tamaño del width solicitado
 */
export const wp = por => {
    if (isNaN(por)) return widthPercentageToDP('100%') < 768 ? widthPercentageToDP(por) : (375 * (parseFloat(por.replace('%', '')) / 100))
    return widthPercentageToDP('100%') < 768 ? widthPercentageToDP(por) : (375 * (parseFloat(por) / 100))
}

export const hp = por => {
    if (isNaN(por)) return widthPercentageToDP('100%') < 768 ? heightPercentageToDP(por) : (812 * (parseFloat(por.replace('%', '')) / 100))
    return widthPercentageToDP('100%') < 768 ? heightPercentageToDP(por) : (812 * (parseFloat(por) / 100))
}

/**
 * guarda en el localstore la información
 * @version 0.0.1
 * @param {*} key clave de storage
 * @param {*} value valor a guardar
 * @param {boolean} keyParse si se quiere parsear o no
 * @return {null} sin retorno o si hay un error una alerta
 */
export const setData = async (key, value, keyParse) => {
    try {
        const jsonValue = keyParse ? JSON.stringify(value) : value
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        return Alert.alert('Ha ocurrido un error intente mas tarde.')
    }
}

export const validationErrors = values => {
    let error = false
    for (const key in values) {
        if (values[key]) error = true
    }
    return error
}

/**
 * elimina en el localstore la información
 * @version 0.0.1
 * @param {*} key clave de storage
 * @return {null} sin retorno o si hay un error una alerta
 */
export const removeData = async key => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        return Alert.alert('Ha ocurrido un error intente mas tarde.')
    }
}

/**
 * limpia el cache
 * @version 0.0.1
 * @return {null} sin retorno o si hay un error una alerta
 */
export const clearData = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        return Alert.alert('Ha ocurrido un error intente mas tarde.')
    }
}

/**
 * Busca la extension del archivo
 * @version 0.0.1
 * @param {string} filename nombre del archivo con la extension
 * @return {string} nombre de la extension
 */
export const extFile = filename => {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}

/**
 * Verifica que contenga un valor
 * @version 0.0.1
 * @param {*} value valor
 * @return {boolean} true o false
 */
export const isNull = value => {
    if (!!value || value === 0) return false
    return true
}

/**
 * Verifica que sea números
 * @version 0.0.1
 * @param {*} value valor
 * @return {boolean} true o false
 */
export const isNumeric = value => {
    if (!isNaN(value)) return false
    return true
}

/**
 * Verifica que sea letras
 * @version 0.0.1
 * @param {*} value valor
 * @return {boolean} true o false
 */
export const onlyLetters = value => {
    const validation = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
    if (validation.test(value) || value.length === 0) return false
    return true
}

/**
 * Verifica que se encuentre en la cantidad del rango de caracteres
 * @version 0.0.1
 * @param {*} value valor
 * @param {*} min mínimo
 * @param {*} max máximo
 * @return {boolean} true o false
 */
export const rangeLength = (value, min, max) => {
    if (((value.length >= min) && (value.length <= max)) || value.length === 0) return false
    return true
}

/**
 * Verifica que sea un correo electrónico
 * @version 0.0.1
 * @param {*} value valor
 * @return {boolean} true o false
 */
export const isEmail = value => {
    const validation = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (validation.test(value) || value.length === 0) return false
    return true
}

/**
 * Se conecta a Aws3
 * @version 0.0.1
 * @return {boolean} la conexión
 */
export const AWS3 = () => new AWS.S3({
    accessKeyId: 'AKIAYOOQNH4RCILB644J',
    secretAccessKey: '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'
})

/**
 * Busca un documento en S3
 * @param {String} Key variable de búsqueda
 * @return {String} base64 del documento
 */
export const getFileS3 = async Key => {
    const S3 = AWS3()
    const res = await S3.getObject({ Bucket, Key }).promise().catch(() => undefined)
    return res && `data:image/jpeg;base64,${res.Body.toString('base64')}`
}
/**
 * Busca un documento en S3
 * @param {String} Key variable de búsqueda
 * @return {String} base64 del documento
 */
export const getFileUrlS3 = async Key => {
    const S3 = AWS3()
    const res = await S3.getSignedUrlPromise('getObject', { Bucket, Key }).catch(() => undefined)
    return res
}

/**
 * guarda un documento en S3
 * @param {String} Key variable de búsqueda
 * @param {Array} Body Array de buffer del documento
 * @return {String} respuesta del servidor
 */
export const putFileS3 = async (Key, Body) => {
    const S3 = AWS3()
    const res = await S3.putObject({ Bucket, Key, Body }).promise().catch(() => undefined)
    return res
}

/**
 * guarda en el dispositivo
 * @param {String} uri url temporal del documento
 * @return {String} respuesta del servidor
 */
export const saveFile = async ({ uri, fileName, nameAlbum }) => {
    // Descarga un documento desde la Web
    if (Constants.platform.web) {
        // Crea una etiqueta A
        const link = window.document.createElement('a')

        // Actualiza sus props
        link.href = uri
        link.download = fileName

        // Ejecuta la etiqueta
        link.click()
    } else {
        try {
            // convierte el ruta a ruta temporal
            const res = await FileSystem.downloadAsync(uri, fileName)

            // Solicita los permisos
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            // Verifica si se tiene Permiso
            if (status !== 'granted') return 'Es necesario los permisos para continuar.'

            // Crea una ruta temporal del documento
            const asset = await MediaLibrary.createAssetAsync(res.uri)

            // Busca la carpeta
            const album = await MediaLibrary.getAlbumAsync(nameAlbum || 'Download')

            // Verifica si al carpeta existe
            if (!album) await MediaLibrary.createAlbumAsync(nameAlbum || 'Download', asset, false)
            else await MediaLibrary.addAssetsToAlbumAsync([asset], album, false)
        } catch (err) {
            return 'Ha ocurrido un problema al descargar el documento, intente de nuevo.'
        }
    }
    return 'El documento se ha descargado con éxito.'
}

/**
 * Transforma una cantidad de números en formato dinero
 * @version 0.0.1
 * @param {numeric} value valor en números
 * @return {boolean} true o false
 */
export const numberFormat = value => {
    if (value) {
        if (parseInt(value)) return new Intl.NumberFormat('de-DE').format(parseFloat(`${value}`.replace(/\./g, '')))
        else return 0
    } else {
        if (isNaN(value)) return ''
        else return 0
    }
}

/**
 * Transforma una fecha en ingles a formato español
 * @version 0.0.1
 * @param {string} value valor en números
 * @return {string} nuevo formato de fecha
 */
export const dateFormat = value => moment(value).format('DD/MM/YYYY')

/**
 * Transforma un numero en formato de teléfono
 * @version 0.0.1
 * @param {string} value valor en números
 * @return {string} nuevo formato en teléfono
 */
export const phoneFormat = value => !!value && parsePhoneNumber(`${value}`, 'US')?.formatNational()

/**
 * Transforma una hora en ingles a formato español
 * @version 0.0.1
 * @param {string} value valor en números
 * @return {string} nuevo formato en hora
 */
export const hourFormat = value => moment(value).format('LT')

/**
 * Calcula el dígito de verificación
 * @version 0.0.1
 * @param {string} value valor en números
 * @return {numeric} el dígito de verificación
 */
export const calculatorDV = value => {
    // variables necesarias
    let nit = `${value}`
    const vpri = new Array(undefined, 3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71)

    // Se limpia el Nit
    nit = nit.replace(/\s/g, ''); // Espacios
    nit = nit.replace(/,/g, ''); // Comas
    nit = nit.replace(/\./g, ''); // Puntos
    nit = nit.replace(/-/g, ''); // Guiones

    // Se valida el nit
    if (isNaN(nit)) return ''

    // Procedimiento
    let x = 0
    let y = 0
    let i = 0
    const z = nit.length

    for (i; i < z; i++) {
        y = nit.substr(i, 1)

        x += (y * vpri[z - i])
    }

    y = x % 11

    return (y > 1) ? 11 - y : y
}

/**
 * transforma todo de base64 a arraybuffer
 * @version 0.0.1
 * @param {string} base64 valor
 * @return {array} array en bytes
 */
export const base64ToArrayBuffer = base64 => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    const lookup = new Uint8Array(256)

    for (let i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i
    }

    let bufferLength = base64.length * 0.75
    const len = base64.length
    let i
    let p = 0
    let encoded1, encoded2, encoded3, encoded4

    if (base64[base64.length - 1] === '=') {
        bufferLength--
        if (base64[base64.length - 2] === '=') bufferLength--
    }

    const arraybuffer = new ArrayBuffer(bufferLength)
    const bytes = new Uint8Array(arraybuffer)

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)]
        encoded2 = lookup[base64.charCodeAt(i + 1)]
        encoded3 = lookup[base64.charCodeAt(i + 2)]
        encoded4 = lookup[base64.charCodeAt(i + 3)]

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4)
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2)
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63)
    }

    return bytes
}

/**
 * Obtiene el token de la notificación
 * @param {String} name Nombre del canal de notificación
 * @return {String} Token
 */
export const tokenNotification = async name => {
    let token

    // verifica si es un dispositivo
    if (!Constants.platform.web) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus

        // verifica si existe permiso
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }

        // verifica si no dieron permisos
        if (finalStatus !== 'granted') return undefined
    } else {
        // verifica si existe permiso
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

        // verifica si no dieron permisos
        if (status !== 'granted') return undefined
    }

    // obtiene el token
    try {
        token = (await Notifications.getExpoPushTokenAsync()).data
    } catch (error) {
        return undefined
    }

    if (Constants.platform.android) {
        Notifications.setNotificationChannelAsync(name || 'default', {
            name: name || 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: primaryC,
        })
    }

    return token
}

/**
 * Obtiene los valores del token
 * @param {object} token valores a buscar
 * @returns {object} nuevos valores decodificados
 */
export const getValueToken = token => token && JSON.parse(token.split('.').map(part => Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString())[1])

/**
 * Verifica si el token contiene id del inversionista
 * @param {object} navigation funciones de navegación
 * @returns {null} no hay retorno
 */
export const tokenAuth = async navigation => {
    const token = await getData('tokenAuth')
    const infoToken = getValueToken(token)
    if (navigation && (!infoToken?.i_id || (infoToken?.i_id && infoToken?.i_state === 3))) return navigation.navigate('RegisterInvestor')

    // verifica al usuario
    return false
}

/**
 * actualizar cache de apollo
 * @param {object} params parámetros para actualizar el cachet de apollo
 * @returns {null} no hay retorno
 */
export const updateCache = async ({ cache, query, nameFun, dataNew }) => {
    return cache.modify({
        fields: {
            [nameFun](dataOld = {}) {
                return cache.writeQuery({ query, data: { ...dataOld, data: { ...(dataOld?.data || {}), ...(dataNew?.data || {}) } } })
            }
        }
    })
}