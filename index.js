module.exports = function (source) {
  // 替换source字符串中的回车符和换行符,并拼接到<script>标签中
  let result = source
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/(.*)/, `module.exports = "<script>$1</script>"`);
  return result;
};
