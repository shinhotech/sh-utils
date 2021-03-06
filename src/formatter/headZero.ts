/**
 * 数字补零
 * @example headZero(1, 2) // => '01'
 * @param {string|number} value 值
 * @param {number} length 转换结果长度
 */
function headZero(value: string | number, length: number = 2): string {
  if (String(value).length > length) {
    console.warn('[Utils/headZero]Warn: 源数据长度大于结果长度！');
  }
  return ('0'.repeat(length) + value).substr(-1 * length);
}

export default headZero;
