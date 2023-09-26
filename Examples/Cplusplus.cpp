#include <iostream>
#include <string>
#include <regex>
using namespace std;

int main()
{
    string str("912 003 4965 \n 912-003-4965 \n +989120034965 \n +98912 003 4965 \n +98912-003-4965 \n 989120034965 \n 98912 003 4965 \n 98912-003-4965");
    regex str_expr("((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}");

    if (regex_match(str, str_expr))
        cout << "string:object => matched\n";

    return 0;
}