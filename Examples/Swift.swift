import Foundation

let pattern = #"((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}"#
let regex = try! NSRegularExpression(pattern: pattern)
let testString = #"""
912 003 4965
912-003-4965
+989120034965
+98912 003 4965
+98912-003-4965
989120034965
98912 003 4965
98912-003-4965
"""#
let stringRange = NSRange(location: 0, length: testString.utf16.count)
let matches = regex.matches(in: testString, range: stringRange)
var result: [[String]] = []
for match in matches {
    var groups: [String] = []
    for rangeIndex in 1 ..< match.numberOfRanges {
        let nsRange = match.range(at: rangeIndex)
        guard !NSEqualRanges(nsRange, NSMakeRange(NSNotFound, 0)) else { continue }
        let string = (testString as NSString).substring(with: nsRange)
        groups.append(string)
    }
    if !groups.isEmpty {
        result.append(groups)
    }
}
print(result)
