function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let subStr = "";
  for (let i = 0; i < s.length; i++) {
    if (subStr.includes(s[i])) {
      subStr = subStr.slice(subStr.indexOf(s[i]) + 1);
    }
    subStr += s[i];
    maxLen = Math.max(maxLen, subStr.length);
  }
  return maxLen;
}
