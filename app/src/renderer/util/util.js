/**
 * Created by zhangweiwei on 2017/4/13.
 */

let separator = '/';
if (process.platform !== 'darwin') {
    separator = '\\';
}

/**
 * 获取图片名
 * @param path
 * @returns {*}
 */
export function getName(path) {
    path = decodeURIComponent(path);
    if (path.lastIndexOf(separator) !== -1) {
        path = path.substring(path.lastIndexOf(separator) + 1, path.length);
    }
    return path;
}

/**
 * 是否为空对象
 * @param e
 * @returns {boolean}
 */
export function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}

export function getQiniuUrl(domain, key) {
    return 'http://' + domain + '/' + encodeURIComponent(key);
}

export function setClipboardText(that, type, url) {
    if (type == 'url') {
        that.$electron.clipboard.writeText(url);
    } else if (type == 'markdown') {
        that.$electron.clipboard.writeText('![' + getName(url) + '](' + url + ')');
    }
}

export function getPrefix(key) {
    if (key.indexOf('/') !== -1) {
        return key.substring(0, key.indexOf('/') + 1);
    } else {
        return '';
    }
}

export function getPostfix(path) {
    if (path.lastIndexOf(separator) !== -1) {
        return path.substring(path.lastIndexOf(separator) + 1, path.length);
    } else {
        return path;
    }
}
