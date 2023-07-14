// include the latest version of the regex crate in your Cargo.toml
extern crate regex;

use regex::Regex;

fn main() {
  let regex = Regex::new(r"((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}").unwrap();
  let string = "912 003 4965
912-003-4965
+989120034965
+98912 003 4965
+98912-003-4965
989120034965
98912 003 4965
98912-003-4965";
  
  // result will be an iterator over tuples containing the start and end indices for each match in the string
  let result = regex.captures_iter(string);
  
  for mat in result {
    println!("{:?}", mat);
  }
}