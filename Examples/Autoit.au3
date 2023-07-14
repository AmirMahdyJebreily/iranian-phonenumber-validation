#include <StringConstants.au3> ; to declare the Constants of StringRegExp
#include <Array.au3> ; UDF needed for _ArrayDisplay and _ArrayConcatenate

Local $sRegex = "((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}"
Local $sString = "912 003 4965" & @CRLF & _
                "912-003-4965" & @CRLF & _
                "+989120034965" & @CRLF & _
                "+98912 003 4965" & @CRLF & _
                "+98912-003-4965" & @CRLF & _
                "989120034965" & @CRLF & _
                "98912 003 4965" & @CRLF & _
                "98912-003-4965"

Local $aArray = StringRegExp($sString, $sRegex, $STR_REGEXPARRAYGLOBALFULLMATCH)
Local $aFullArray[0]
For $i = 0 To UBound($aArray) -1
    _ArrayConcatenate($aFullArray, $aArray[$i])
Next
$aArray = $aFullArray

; Present the entire match result
_ArrayDisplay($aArray, "Result")
